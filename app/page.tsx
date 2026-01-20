import Footer from "../components_web/Footer";
import Figure from "../components_web/Figure";
import Navbar from "../components_web/Navbar";
import Services from "../components_web/Services";
import "flowbite"


export default function Home() {
 return (
    <div className="pt-24">
      <Navbar />
      <Figure />
      <Services/> 
      <Footer />
    </div>
  );
}