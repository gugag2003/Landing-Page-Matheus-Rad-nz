import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Pirata_One } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';

const pirataOne = Pirata_One({
  subsets: ['latin'],
  weight: '400', // Pirata One só tem peso 400
  variable: '--font-pirata-one',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '600'], // ✅ inclui o peso "bold"
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: "Matheus Radünz",
  description: "Consultoria Personalizada Para Libertar o Seu Potencial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pirataOne.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
