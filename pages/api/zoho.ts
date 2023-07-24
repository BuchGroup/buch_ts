import { NextApiRequest, NextApiResponse } from "next";

import { LeadData } from "@/interfaces/LeadProps";

const clientId = "1000.6JTRZXDWR7O63EYB044STI4CMLXE9W";
const clientSecret = "299ee579030a84364e3e491aee76a77b28756602c0";
const refreshToken =
  "1000.21dfa38c6a4453b8811c9416afd59399.208098d981219843390d03d240c58700";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiUrl = "https://crm.zoho.com/crm/v2/Leads";

  if (req.method === "POST") {
    const { firstName, lastName, email, phone } = req.body;

    const leadData: LeadData = {
      Last_Name: lastName,
      First_Name: firstName,
      Email: email,
      Phone: phone,
    };

    try {
      const authToken = await getAuthToken();
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Zoho-oauthtoken ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: [leadData] }),
      });

      const result = await response.json();

      if (response.ok) {
        res.status(200).json(result);
      } else {
        res.status(response.status).json({ message: result });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

async function getAuthToken(): Promise<string> {
  const tokenUrl = `https://accounts.zoho.com/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`;

  const response = await fetch(tokenUrl, { method: "POST" });
  const data = await response.json();

  if (response.ok) {
    return data.access_token;
  } else {
    throw new Error(data.error);
  }
}
