'use client';

import { allCocktails } from '../../constants/index.js'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Menu = () => {
 const contentRef = useRef();
 const [currentIndex, setCurrentIndex] = useState(0);
 
 useGSAP(() => {
	gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
	gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
	 xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
	})
	gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
	gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
 }, [currentIndex]);
 
 const totalCocktails = allCocktails.length;
 
 const goToSlide = (index) => {
	const newIndex = (index + totalCocktails) % totalCocktails;
	
	setCurrentIndex(newIndex);
 }
 
 const getCocktailAt = (indexOffset) => {
	return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
 }
 
 const currentCocktail = getCocktailAt(0);
 const prevCocktail = getCocktailAt(-1);
 const nextCocktail = getCocktailAt(1);
 
 return (
	<section id="menu" aria-labelledby="menu-heading">
	 <div className="section-heading-wrapper text-center py-12">
	   <h2 id="menu-heading" className="text-5xl font-modern-negra text-gradient tracking-wide">MENU SIGNATURE</h2>
	   <p className="mt-4 text-white-100 max-w-3xl mx-auto">Sélection tournante de cafés & créations torréfiées.</p>
	 </div>
	 <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
	 <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
	 
	 {/* sr-only heading removed in favor of visible heading above */}
	 
	<nav className="cocktail-tabs" aria-label="Navigation Menu Signature">
		{allCocktails.map((cocktail, index) => {
		 const isActive = index === currentIndex;
		 
		 return (
			<button key={cocktail.id || cocktail.name} className={`
				${isActive
				 ? 'text-white border-white'
				 : 'text-white/50 border-white/50'}
			 `}	onClick={() => goToSlide(index)}
			>
			 {cocktail.name}
			</button>
		 )
		})}
	 </nav>
	 
	 <div className="content">
		<div className="arrows">
		 <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
			<span>{prevCocktail.name}</span>
			<img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
		 </button>
		 
		 <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
			<span>{nextCocktail.name}</span>
			<img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
		 </button>
		</div>
		
		<div className="cocktail relative">
		 <img src={currentCocktail.image} alt={currentCocktail.name} className="object-contain drop-shadow-2xl transition-all duration-500"/>
		 <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay bg-gradient-to-tr from-yellow/10 via-transparent to-white/5" />
		</div>
		
		<div className="recipe">
		 <div ref={contentRef} className="info">
			<p>Création :</p>
			<p id="title">{currentCocktail.name}</p>
		 </div>
		 
		 <div className="details">
			<h2>{currentCocktail.title}</h2>
			<p>{currentCocktail.description}</p>
		 </div>
		</div>
	 </div>
	</section>
 )
}
export default Menu