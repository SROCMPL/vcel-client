import { Montserrat, Abhaya_Libre } from "next/font/google";
import "./globals.css";

const abhaya = Abhaya_Libre({
  variable: "--font-abhaya",
  weight: "800",   
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "vcel-client",
  description: "vcel-client",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${abhaya.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
