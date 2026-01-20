import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
export const metadata: Metadata = {
  title: "Dashboard-Portfolio",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        
        <div className="flex h-screen w-full p-5">
           <Sidebar />
          <div className="flex flex-col flex-1">
           <Header />
            <main className="flex-1 px-5 pb-5 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
