import clsx from "clsx";

import { Roboto_Slab } from "next/font/google";
import "@/public/assets/style/globals.css";

import Providers from "@/components/providers";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";

import { getEverything } from "@/sanity/sanity-utils";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  display: "swap",
});

export const metadata = {
  title: "Next and Sanity web app created for showing purposes",
  description: "Created by Elias Ablan, Full Stack Developer",
};

export default async function RootLayout({ children }) {
  const everything = await getEverything();

  return (
    <html lang="en" className="!scroll-smooth !scroll-pt-16">
      <body className={clsx("text-gray-700", roboto.className)}>
        <Providers everything={everything}>
          {/* <Header /> */}
          {children}
          <BackToTopButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
