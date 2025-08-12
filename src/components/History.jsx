import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { historyTimeline, historyStats, foundersQuote } from '../../constants/index.js';

// Fonction utilitaire pour formater les nombres (abbreviation k / M si nécessaire)
const formatNumber = (value, abbreviate) => {
  if (!abbreviate) return value;
  if (value >= 1_000_000) return (value / 1_000_000).toFixed(0) + 'M';
  if (value >= 1_000) return (value / 1_000).toFixed(0) + 'k';
  return value;
};

const History = () => {
  useGSAP(() => {
    // Animation du titre principal
    const titleSplit = SplitText.create('#history h1', {
      type: 'words'
    });
    
    const introTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#history',
        start: 'top center'
      }
    });
    
    introTimeline
      .from(titleSplit.words, {
        opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
      })
      .from('.hero-description', {
        opacity: 0, yPercent: 50, duration: 1, ease: 'power1.inOut'
      }, '-=0.5');

    // Animation des statistiques avec compteurs
  historyStats.forEach((stat, index) => {
      const wrapper = document.querySelector(`#stat-${index}`);
      const statElement = wrapper?.querySelector('.stat-number');
      if (!statElement) return;

      const target = stat.number;
      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: `#stat-${index}`,
          start: 'top 80%'
        },
        onUpdate: () => {
          const current = Math.floor(obj.val);
          statElement.textContent = formatNumber(current, stat.abbreviate);
        }
      });
    });

    // Animation des éléments de la timeline
    gsap.fromTo('.timeline-item', 
      { 
        opacity: 0, 
        y: 100 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 60%'
        }
      }
    );

    // Animation de la ligne centrale de la timeline
    gsap.fromTo('.timeline-line',
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 2,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        }
      }
    );

    // Animation de la citation
    const quoteSplit = SplitText.create('.quote-text', {
      type: 'lines'
    });
    
    gsap.from(quoteSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: 'power1.inOut',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.founders-quote',
        start: 'top 70%'
      }
    });

  }, []);

  return (
    <section id="history" className="min-h-screen py-20" aria-labelledby="history-heading">
      <div className="section-heading-wrapper text-center pb-8">
        <h2 id="history-heading" className="text-5xl font-modern-negra text-gradient tracking-wide">HISTOIRE</h2>
        <p className="mt-4 text-white-100 max-w-3xl mx-auto">Un voyage de passion et d'évolution dans l'art du café.</p>
      </div>
      {/* Hero Section */}
      <div className="container mx-auto px-5 text-center mb-20">
        <h1 className="text-6xl md:text-8xl font-modern-negra mb-8 text-gradient">
          NOTRE HISTOIRE
        </h1>
        <p className="hero-description text-xl md:text-2xl max-w-4xl mx-auto text-white-100 leading-relaxed">
          Depuis près de trois décennies, Milky Deal cultive l'art du café français avec passion et authenticité. 
          Découvrez notre parcours, nos valeurs et notre vision pour l'avenir du café.
        </p>
      </div>

  {/* Statistiques retirées selon demande */}

      {/* Timeline */}
      <div className="timeline-container relative max-w-6xl mx-auto px-5">
        {/* Ligne centrale */}
        <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow h-full origin-top"></div>
        
        <div className="space-y-20">
          {historyTimeline.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item relative flex items-center ${
                item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
            >
              {/* Année */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-black border-4 border-yellow rounded-full w-16 h-16 flex-center">
                <span className="text-yellow font-bold text-sm">{item.year}</span>
              </div>
              
              {/* Contenu */}
              <div className={`w-full md:w-5/12 ${item.side === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16'} mt-8 md:mt-0`}>
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl md:text-3xl font-modern-negra text-yellow mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white-100 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div className={`w-full md:w-5/12 ${item.side === 'left' ? 'md:pl-16' : 'md:pr-16'} mt-4 md:mt-0`}>
                <div className="relative rounded-2xl overflow-hidden h-64 md:h-80">
                  <div className="noisy"></div>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Citation des fondateurs */}
      <div className="founders-quote container mx-auto px-5 mt-32 text-center">
        <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <blockquote className="quote-text text-2xl md:text-3xl font-serif text-white italic leading-relaxed mb-8">
            "{foundersQuote.text}"
          </blockquote>
          <div className="space-y-2">
            <p className="text-xl font-modern-negra text-yellow">{foundersQuote.author}</p>
            <p className="text-white-100">{foundersQuote.role}</p>
          </div>
        </div>
      </div>

      {/* Feuilles décoratives */}
      <img 
        src="/images/hero-left-leaf.png" 
        alt="feuille gauche" 
        className="absolute top-20 left-0 w-32 md:w-48 opacity-50 pointer-events-none"
      />
      <img 
        src="/images/hero-right-leaf.png" 
        alt="feuille droite" 
        className="absolute bottom-20 right-0 w-32 md:w-48 opacity-50 pointer-events-none"
      />
    </section>
  );
};

export default History; 