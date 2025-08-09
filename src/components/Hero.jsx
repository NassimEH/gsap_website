import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
 const videoRef = useRef();
 
 const isMobile = useMediaQuery({ maxWidth: 767 });
 
 useGSAP(() => {
	const heroSplit = new SplitText(".title", {
	 type: "chars, words",
	});
	
	const paragraphSplit = new SplitText(".subtitle", {
	 type: "lines",
	});
	
	// Apply text-gradient class once before animating
	heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
	
	gsap.from(heroSplit.chars, {
	 yPercent: 100,
	 duration: 2.5, // Augmenté de 1.8 à 2.5 secondes
	 ease: "expo.out",
	 stagger: 0.08, // Légèrement plus lent
	});
	
	gsap.from(paragraphSplit.lines, {
	 opacity: 0,
	 yPercent: 100,
	 duration: 2.5, // Augmenté de 1.8 à 2.5 secondes
	 ease: "expo.out",
	 stagger: 0.08, // Légèrement plus lent
	 delay: 1.2, // Délai légèrement augmenté
	});
	
	gsap
	.timeline({
	 scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: 2, // Ralenti le parallax des feuilles
	 },
	})
	.to(".right-leaf", { y: 200 }, 0)
	.to(".left-leaf", { y: -200 }, 0)
	.to(".arrow", { y: 100 }, 0);
	
	const startValue = isMobile ? "top 50%" : "center 60%";
	const endValue = isMobile ? "120% top" : "bottom top";
	
	let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: 3, // Ralenti l'animation (plus la valeur est élevée, plus c'est lent)
		pin: true,
	 },
	});
	
	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
	};
 }, []);
 
 return (
	<>
	 <section id="hero" className="noisy">
		<h1 className="title">CAFÉ</h1>
		
		<img
		 src="/images/hero-left-leaf.png"
		 alt="left-leaf"
		 className="left-leaf"
		/>
		<img
		 src="/images/hero-right-leaf.png"
		 alt="right-leaf"
		 className="right-leaf"
		/>
		
		<div className="body">
		 {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
		 
		 <div className="content">
			<div className="space-y-5 hidden md:block">
			 <p>Riche. Aromatique. Authentique.</p>
			 <p className="subtitle">
				Savourez l'Élégance <br /> du Café Français
			 </p>
			</div>
			
			<div className="view-cocktails">
			 <p className="subtitle">
				Chaque café que nous servons est un mélange d'ingrédients de première qualité,
				de créativité artisanale et de recettes traditionnelles — conçu pour éveiller
				vos sens à l'art français du café.
			 </p>
			 <a href="#cocktails">Découvrir nos cafés</a>
			</div>
		 </div>
		</div>
	 </section>
	 
	 <div className="video absolute inset-0">
		<video
		 ref={videoRef}
		 muted
		 playsInline
		 preload="auto"
		 src="/videos/output.mp4"
		/>
	 </div>
	</>
 );
};

export default Hero;