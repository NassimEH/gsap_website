import React from 'react';
import { navLinks, socials } from '../../constants/index.js';

const Footer = () => {
  return (
    <div className="bg-black border-t border-white/10 mt-0" aria-labelledby="footer-legal">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Milky Deal" className="w-12 h-12" />
            <p className="font-modern-negra text-xl tracking-wide">Milky Deal</p>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">Maison de café artisanale Parisienne dédiée aux extractions précises, aux arômes équilibrés et à l'hospitalité chaleureuse.</p>
          <div className="flex items-center gap-4 pt-2">
            {socials.map(s => (
              <a key={s.name} href={s.url} aria-label={s.name} className="group">
                <img src={s.icon} className="w-6 h-6 opacity-60 group-hover:opacity-100 transition" />
              </a>
            ))}
          </div>
          <div className="pt-4 text-xs text-white/40 space-y-1">
            <p>Site développé par <span className="text-white/70 font-medium">Nassim EL HADDAD</span></p>
            <p>
              <a href="https://github.com/NassimEH" target="_blank" className="hover:text-yellow">GitHub</a> ·
              <a href="https://www.linkedin.com/in/nassim-elhaddad/" target="_blank" className="hover:text-yellow ms-1">LinkedIn</a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/50">
            {navLinks.map(l => (
              <li key={l.id}><a href={`#${l.id}`} className="hover:text-yellow transition-colors">{l.title}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">Légal</h4>
          <ul className="space-y-2 text-sm text-white/50" id="footer-legal">
            <li><a href="#mentions" className="hover:text-yellow">Mentions légales</a></li>
            <li><a href="#confidentialite" className="hover:text-yellow">Politique de confidentialité</a></li>
            <li><a href="#cookies" className="hover:text-yellow">Gestion des cookies</a></li>
            <li><a href="#cgv" className="hover:text-yellow">CGV</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">Newsletter</h4>
          <form className="space-y-3" onSubmit={e => e.preventDefault()}>
            <input type="email" required placeholder="Votre email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-yellow" />
            <button className="w-full rounded-lg bg-yellow text-black font-semibold py-2 text-sm hover:brightness-110 transition">S'abonner</button>
            <p className="text-[11px] leading-snug text-white/40">En vous inscrivant vous acceptez de recevoir des communications de Milky Deal. Vous pouvez vous désabonner à tout moment.</p>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} Milky Deal — Tous droits réservés.
      </div>
    </div>
  );
};

export default Footer;
