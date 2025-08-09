// ...existing code...
import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'

const About = () => {
 useGSAP(() => {
    const titleSplit = SplitText.create('#about h2', {
     type: 'words'
    })
    
    const scrollTimeline = gsap.timeline({
     scrollTrigger: {
        trigger: '#about',
        start: 'top center'
     }
    })
    
    scrollTimeline
     .from(titleSplit.words, {
        opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
    })
     .from('.top-grid div, .bottom-grid div', {
        opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
    }, '-=0.5')
 })
 
 return (
    <div id="about">
     <div className="mb-16 md:px-0 px-5">
        <div className="content">
         <div className="md:col-span-8">
            <p className="badge">Art du café français</p>
            <h2>
             Là où chaque détail compte <span className="text-white">-</span>
                de la torréfaction au service
            </h2>
         </div>
         
         <div className="sub-content">
            <p>
             Chaque café que nous servons reflète notre exigence du détail, de la sélection des grains à l’extraction parfaite. Cette attention transforme une simple tasse en une expérience mémorable.
            </p>
            
            <div>
             <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
             </p>
             <p className="text-sm text-white-100">
                Plus de 12 000 clients satisfaits
             </p>
            </div>
         </div>
        </div>
     </div>
     
     <div className="top-grid">
        <div className="md:col-span-3">
         <div  className="noisy" />
         <img src="/images/abt1.png" alt="grains-de-cafe" />
        </div>
        
        <div className="md:col-span-6">
         <div  className="noisy" />
         <img src="/images/abt2.png" alt="barista-extraction" />
        </div>
        
        <div className="md:col-span-3">
         <div  className="noisy" />
         <img src="/images/cafebistrot.png" alt="latte-art" />
        </div>
     </div>
     
     <div className="bottom-grid">
        <div className="md:col-span-8">
         <div  className="noisy" />
         <img src="/images/abt3.png" alt="ambiance-cafe-parisien" />
        </div>
        
        <div className="md:col-span-4">
         <div  className="noisy" />
         <img src="/images/abt4.png" alt="patisseries-francaises" />
        </div>
     </div>
     
    </div>
 )
}
export default About
// ...existing code...