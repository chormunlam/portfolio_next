import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";




const inter = Inter({ subsets: ["latin"] });

//https://colors.muz.li/palette/ffffbf/b3b386/bfcfff/8691b3/ffbfbf
export const metadata = {
  title: "ChorMun | Portfolio",
  description: "Chormun is a full-stack developer with 1 year of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} 
        bg-gray-50 text-gray-800 relative pt-28 sm:pt-36 
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
        dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem]
         h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] 
         lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] 
         dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />

            <Toaster position="top-right" />
     
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
       
      </body>
    </html>
  );
}
