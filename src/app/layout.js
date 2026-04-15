import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { TimelineProvider } from "@/lib/providers/TimeLineProvider";
import Providers from "./providers";
import GlobalLoaderWrapper from "@/components/shared/Loader/GlobalLoaderWrapper";
import { LoaderProvider } from "@/context/LoaderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "Smart friendship & timeline tracker",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* 1️⃣ FIRST: LoaderProvider */}
        <LoaderProvider>

          {/* 2️⃣ THEN: everything else */}
          <TimelineProvider>

            <GlobalLoaderWrapper />

            <Navbar />
            <Providers>{children}</Providers>
            <Footer />
            <ToastContainer />

          </TimelineProvider>

        </LoaderProvider>
      </body>
    </html>
  );
}
