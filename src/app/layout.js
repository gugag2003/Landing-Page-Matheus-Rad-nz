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
  openGraph: {
    title: 'Matheus Radünz - Personal Trainer',
    description: 'Transforme seu corpo com Consultoria Personalizada.',
    url: 'https://matheusradunz.com',
    siteName: 'Matheus Radünz',
    images: [
      {
        url: '/matheus-preview.png', // coloque a URL completa da imagem
        width: 1200,
        height: 630,
        alt: 'Matheus Radünz - Personal Trainer',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
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
