import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";

export const metadata = {
  title: "Gamoraft | Gaming Experiences",
  description: "Immersive gaming experiences that transport players to new worlds",
  keywords: "gaming, video games, game development, immersive games, Gamoraft",
};

export default function CommonLayout({ children }) {
  return (
    <div className="font-poppins">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}