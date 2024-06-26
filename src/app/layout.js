import {Monoton} from "next/font/google";
import "./globals.css";

const monoton = Monoton({ subsets: ["latin"],
   variable:'--font-monoton',
   weight:['400']
 });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monoton.className}>{children}</body>
    </html>
  );
}
