import RootProvider from "@/components/RootProvider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className} monica-version='5.9.7' monica-id='1'>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
