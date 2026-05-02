import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { AppProvider } from "@/components/AppContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  preload: false,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  preload: false,
});

export const metadata = {
  title: "Pastry Shop",
  description: "Pastry Shop Webiste App",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.className} ${geistMono.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="flex flex-col justify-center items-center w-full">
          <AppProvider>
            <Toaster />
            <Header />
            {children}
            <Footer />
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
