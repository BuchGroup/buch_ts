import { useState } from "react";

interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function LeadForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/zoho", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result);
      } else {
        console.error(result);
      }
    } catch (error) {
      console.error(error);
    }

    // Clear the form data
    setFormData({ firstName: "", lastName: "", email: "", phone: "" });
  };

  return (
    <div>
  <form
    onSubmit={handleSubmit}
    className="px-4 rounded mx-auto max-w-3xl w-full mt-16 sm:mt-32 pb-24 inputs space-y-6"
  >
    <div>
      <h1 className="text-6xl pb-8 sm:pb-16 font-bold text-center">
        Contact Us Today!
      </h1>
    </div>
    <div className="flex flex-col sm:flex-row sm:space-x-4">
      <div className="w-full pb-5 sm:w-1/2">
        <label className="font-semibold" htmlFor="firstName">
          First Name
        </label>
        <input
          className="border outline-0 border-black border-t-0 border-l-0 border-r-0 border-b-2 focus:border-sky-400 transition-all py-2 w-full"
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="w-full sm:w-1/2 sm:ml-4">
        <label className="font-semibold" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="border outline-0 border-black border-t-0 border-l-0 border-r-0 border-b-2 focus:border-sky-400 transition-all py-2 w-full"
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4 sm:mt-0">
      <div className="w-full pb-5 sm:w-1/2">
        <label className="font-semibold" htmlFor="phone">
          Phone
        </label>
        <input
          className="border outline-0 border-black border-t-0 border-l-0 border-r-0 border-b-2 focus:border-sky-400 transition-all py-2 w-full"
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="w-full sm:w-1/2 sm:ml-4">
        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="border outline-0 border-black border-t-0 border-l-0 border-r-0 border-b-2 focus:border-sky-400 transition-all py-2 w-full"
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
    <div className="flex justify-center">
    <button className="pb-10 mr-auto ml-auto ">
      <p className="font-bold text-xl">Submit</p>
      <hr className="w-20 h-[2.5px] border-0 rounded bg-black relative" />
    </button>
    </div>
  </form>
</div>
  );
}
