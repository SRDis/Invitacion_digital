import { Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";


const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${script.variable}`}>
        {children}
      </body>
    </html>
  );
}
