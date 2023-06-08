import { ReactNode } from "react";
import Footer from "./Footer";
import { DM_Mono } from "next/font/google";

interface ErrorLayoutProps {
  children: ReactNode;
}

const DM_MONO = DM_Mono({ subsets: ["latin"], weight: ["500", "400"] });

const ErrorLayout = ({ children }: ErrorLayoutProps) => {
  return (
    <div
      className={`flex min-h-screen flex-col px-24 lg:p-0 lg:max-w-xl lg:mx-auto ${DM_MONO.className}`}
    >
      {children}
      <Footer />
    </div>
  );
};

export default ErrorLayout;
