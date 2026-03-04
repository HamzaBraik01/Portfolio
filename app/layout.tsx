import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Hamza BRAIK | Java Full Stack Developer",
  description: "Java Full Stack Developer specializing in Spring Boot, Angular, Vue.js, and Data Analytics. Based in Morocco.",
  keywords: "Java, Full Stack Developer, Spring Boot, Angular, Vue.js, Power BI, Morocco",
  authors: [{ name: "Hamza BRAIK" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} antialiased bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}