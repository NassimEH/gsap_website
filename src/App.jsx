import { ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktail from "./components/Cocktail";
import About from "./components/About";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktail />
            <About />
        </main>
    )
}
export default App;