import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Header from "@/components/Header/Header";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ReactFlowProvider } from "reactflow";

export const metadata = {
  title: "Mindmap Flow",
  description: "Mindmap Flow - Công cụ hỗ trợ xây dụng sơ đồ tư duy hiệu quả",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          {<Header />}
          {children}
          {<Footer />}
        </body>
      </UserProvider>
    </html>
  );
}
