import { ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktail from "./components/Cocktail";
import About from "./components/About";
import History from "./components/History";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Events from "./components/Events";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktail />
            <About />
            <History />
            <Art />
            <Menu />
            <Events />
            <Contact />
            <Footer />
        </main>
    )
}
export default App;