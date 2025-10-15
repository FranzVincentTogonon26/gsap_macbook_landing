import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Showcase from "./components/three/Showcase";
import Performance from "./components/three/Performance";
import Features from "./components/three/Features";
import Highlights from "./components/three/Highlights";
import Footer from "./components/three/Highlights";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
        <NavBar />
        <Hero />
        {/* <ProductViewer />
        <Showcase /> */}
        <Performance />
        <Features />
        <Highlights />
        <Footer />
    </main>
  )
}

export default App