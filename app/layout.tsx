import type { Metadata } from "next";
import { Audiowide,DM_Sans, Rethink_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";

const rethink=Rethink_Sans({
  variable:"--font-rethink",
  subsets:["latin"],

  
});
const dmSans=DM_Sans({
  variable:"--font-dmSans",
  subsets:["latin"],
})

const audiowide=Audiowide({
        weight:"400",
        variable:  "--font-dmSans",
        subsets:["latin"],
})



export const metadata: Metadata = {
  title: "Livora",
  description: "Livora Interior design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${audiowide.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
