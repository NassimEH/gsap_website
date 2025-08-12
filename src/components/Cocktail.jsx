import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { cocktailLists, mockTailLists } from '../../constants/index.js'

const Cocktails = () => {
 useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
     scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
     }
    })
    
    parallaxTimeline
     .from('#c-left-leaf', { x: -100, y: 100 })
     .from('#c-right-leaf', { x: 100, y: 100 })
 })
 
 return (
      <section id="cocktails" className="noisy" aria-labelledby="cocktails-heading">
       <div className="section-heading-wrapper text-center py-12">
          <h2 id="cocktails-heading" className="text-5xl font-modern-negra text-gradient tracking-wide">CAFÉS & BRUNCH</h2>
          <p className="mt-4 text-white-100 max-w-3xl mx-auto">Nos signatures café et formules brunch artisanales.</p>
       </div>
     <img src="/images/cocktail-left-leaf.png" alt="feuille gauche" id="c-left-leaf" />
     <img src="/images/cocktail-right-leaf.png" alt="feuille droite" id="c-right-leaf" />
     
     <div className="list">
        <div className="popular">
                   <h3 className="text-2xl font-bold mb-4">Nos cafés signature :</h3>
         
         <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
             <li key={name}>
                <div className="md:me-28">
                 <h3>{name}</h3>
                 <p>{country} | {detail}</p>
                </div>
                <span>- {price}</span>
             </li>
            ))}
         </ul>
        </div>
        
        <div className="loved">
                   <h3 className="text-2xl font-bold mb-4">Nos formules brunch :</h3>
         
         <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
             <li key={name}>
                <div className="me-28">
                 <h3>{name}</h3>
                 <p>{country} | {detail}</p>
                </div>
                <span>- {price}</span>
             </li>
            ))}
         </ul>
        </div>
     </div>
    </section>
 )
}

export default Cocktails;