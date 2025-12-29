import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "../styles/toolkit-en.css";
import ScriptsLoader from "@/components/scripts/ScriptsLoader";

export const metadata: Metadata = {
  title: "ADCB Asset Management Limited",
  description: "ADCB Asset Management Limited - Tailored Investment Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0" />
        <link rel="icon" href="/en/system/includes/assets/images/favicon.ico" />
        <Script
          type="text/javascript"
          src="/en/system/assets/OTT/consent/7bc081f8-ac1e-479b-9440-e3dde8a050fc-test/OtAutoBlock.js"
          strategy="afterInteractive"
        />
        <Script
          src="/en/system/assets/OTT/scripttemplates/otSDKStub.js"
          data-document-language="true"
          type="text/javascript"
          charSet="UTF-8"
          data-domain-script="7bc081f8-ac1e-479b-9440-e3dde8a050fc"
          strategy="afterInteractive"
        />
      </head>
      <body className="en" id="private">
        <ScriptsLoader />
        {children}
      </body>
    </html>
  );
}
