import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import { Inter } from "next/font/google";
import Providers from "@/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jacques' Website",
  description: "The personal website of Jacques Van Blokland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black ${inter.className} ">
        <div className="container grid-cols-6 max-w-2xl mx-auto bg-green-800 py-4 rounded-lg">
          <Providers
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
