import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const events = [
  {
    title: "Atelier Latte Art",
    date: "Samedi 15 Septembre",
    description: "Apprenez à créer des œuvres d'art dans votre tasse avec nos baristas experts.",
    image: "/images/abt2.png",
  },
  {
    title: "Dégustation de Cafés",
    date: "Dimanche 22 Septembre",
    description: "Découvrez les saveurs uniques de nos cafés d'origine.",
    image: "/images/abt3.png",
  },
  {
    title: "Brunch Spécial Parisien",
    date: "Samedi 29 Septembre",
    description: "Savourez un brunch exclusif avec des spécialités françaises.",
    image: "/images/abt4.png",
  },
];

const Events = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".event"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="events" ref={sectionRef} className="py-24 relative" aria-labelledby="events-heading">
      <div className="section-heading-wrapper text-center pb-12 relative z-10">
        <h2 id="events-heading" className="text-5xl font-modern-negra text-gradient tracking-wide">ÉVÉNEMENTS</h2>
        <p className="mt-4 text-white-100 max-w-3xl mx-auto">Ateliers, dégustations & rendez-vous gourmands à ne pas manquer.</p>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div key={index} className="event group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <span className="absolute top-3 left-3 bg-yellow text-black text-xs font-bold px-3 py-1 rounded-full tracking-wide">{event.date}</span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-modern-negra text-yellow leading-snug">{event.title}</h3>
                <p className="text-white-100 text-sm leading-relaxed">{event.description}</p>
                <button className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-yellow hover:underline">
                  Réserver une place
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none" style={{background:'radial-gradient(circle at 30% 20%, #6b4f1d33, transparent 60%)'}} />
    </section>
  );
};

export default Events;