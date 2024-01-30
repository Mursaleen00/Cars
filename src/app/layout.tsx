import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";

const exo = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cars",
  description: "Cars website created by Mursaleen Ansari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo.className} bg-theme-body-color text-white`}>
        {children}
      </body>
    </html>
  );
}
