import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Jovem Consciente",
  description: "Uma plataforma para jovens",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
       <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
          strategy="afterInteractive"
        />
    </html>
  );
}
