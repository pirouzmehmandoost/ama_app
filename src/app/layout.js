import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "medium",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ama Earth Group Project",
  description: "An environmental report generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased bg-slate-950`}>
        {children}
      </body>
    </html>
  );
}
