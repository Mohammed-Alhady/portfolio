// app/layout.tsx
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "مـحـمـد الهادي | بـورتـفـولـيـو شـخـصـي",
  description: "مطور تطبيقات ويب",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
