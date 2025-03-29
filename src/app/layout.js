import "./globals.css";

export const metadata = {
  title: "Gamoraft | Gaming Experiences",
  description:
    "Immersive gaming experiences that transport players to new worlds",
  keywords: "gaming, video games, game development, immersive games, Gamoraft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
