import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Heading from "./Heading";
import { DM_Mono } from "next/font/google";

interface MainLayoutProps {
  children: ReactNode;
}

const DM_MONO = DM_Mono({ subsets: ["latin"], weight: ["500", "400"] });

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div
      className={`flex min-h-screen flex-col px-24 lg:p-0 lg:max-w-xl lg:mx-auto ${DM_MONO.className}`}
    >
      <Heading />
      <Navbar />
      <main className="grow mt-6 mb-24">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
