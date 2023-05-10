import {ReactNode} from "react";
import Head from "next/head";
import { METADATA } from "@/constants";

type MyComponentProps = {
    children: ReactNode;
  };

const Meta = ({ children }: MyComponentProps) => {
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
        <meta name="description" content={METADATA.description} />
        <meta
          name="keywords"
          content="Buch, Columbus realtor, Columbus realtors, Real estate, Ohio real estate, Ohio realtors, Sell home, Buy Home, Sell home in Columbus, Buy home in Columbus"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="BuchGroup" />
        <meta
          name="copyright"
          content="All rights reserved, 2023.BuchGroup "
        />
        <meta httpEquiv="content-language" content="en" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo.png"
        />
        <meta name="msapplication-TileColor" content="#7000FF" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {children}
    </>
  );
};

export default Meta;
