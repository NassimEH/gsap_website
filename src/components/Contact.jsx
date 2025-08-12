import { openingHours, socials, storeInfo } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
	useGSAP(() => {
		const scope = gsap.context(() => {
			const titleSplit = SplitText.create('#contact-heading', { type: 'chars' });
			gsap.from(titleSplit.chars, { opacity: 0, yPercent: 100, stagger: 0.02, duration: 0.8, ease: 'power3.out' });

			gsap.utils.toArray('.contact-fade').forEach((el, i) => {
				gsap.from(el, {
					opacity: 0,
					y: 40,
					duration: 0.8,
					delay: i * 0.1,
					ease: 'power2.out',
					scrollTrigger: { trigger: el, start: 'top 85%' }
				});
			});

			gsap.from('#footer-logo', { opacity: 0, scale: 0.6, duration: 0.8, ease: 'back.out(1.7)', scrollTrigger: { trigger: '#footer-logo', start: 'top 90%' } });
		});
		return () => scope.revert();
	});

	return (
		<footer id="contact" className="relative pt-32 bg-gradient-to-b from-black via-black/95 to-black text-white">
			<img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" className="absolute top-10 right-0 w-40 opacity-30" />
			<img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" className="absolute bottom-10 left-0 w-40 opacity-30" />
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 id="contact-heading" className="text-5xl font-modern-negra text-gradient tracking-wide">CONTACT</h2>
					<p className="mt-4 text-white-100 max-w-2xl mx-auto contact-fade">Une question, une envie de collaboration ou juste un mot doux ? Parlons café.</p>
				</div>

				<div className="grid md:grid-cols-5 gap-12 mb-20">
					<div className="md:col-span-2 space-y-6 contact-fade">
						<h3 className="text-xl font-semibold text-yellow">Visitez notre café</h3>
						<p className="text-white/80 leading-relaxed">{storeInfo.address}</p>
						<div className="rounded-xl overflow-hidden border border-white/10 h-56 relative">
							<div className="absolute inset-0 bg-[url('/images/abt3.png')] bg-cover bg-center opacity-40" />
							<div className="absolute inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center text-sm text-white/70 p-6 text-center">
								Carte interactive à intégrer (Google Maps / Leaflet)
							</div>
						</div>
					</div>

						<div className="space-y-6 contact-fade">
							<h3 className="text-xl font-semibold text-yellow">Nous contacter</h3>
							<p>{storeInfo.contact.phone}</p>
							<p>{storeInfo.contact.email}</p>
							<div className="flex items-center gap-4 pt-2">
								{socials.map(s => (
									<a key={s.name} href={s.url} aria-label={s.name} className="group">
										<img src={s.icon} className="w-6 h-6 opacity-70 group-hover:opacity-100 transition" />
									</a>
								))}
							</div>
						</div>

						<div className="space-y-4 contact-fade">
							<h3 className="text-xl font-semibold text-yellow">Horaires</h3>
							<ul className="space-y-1 text-sm">
								{openingHours.map(t => (
									<li key={t.day} className="flex justify-between border-b border-white/5 pb-1">
										<span>{t.day}</span>
										<span className="text-white/70">{t.time}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="md:col-span-5 contact-fade">
							<div className="max-w-xl mx-auto text-center bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm">
								<h3 className="text-2xl font-modern-negra text-yellow mb-6">Écrivez-nous</h3>
								<form className="space-y-5" onSubmit={e => e.preventDefault()}>
									<div className="text-left">
										<label className="text-xs uppercase tracking-wider text-white/50">Nom</label>
										<input type="text" className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow" placeholder="Votre nom" />
									</div>
									<div className="text-left">
										<label className="text-xs uppercase tracking-wider text-white/50">Email</label>
										<input type="email" className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow" placeholder="vous@exemple.com" />
									</div>
									<div className="text-left">
										<label className="text-xs uppercase tracking-wider text-white/50">Message</label>
										<textarea rows={5} className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-yellow" placeholder="Votre message"></textarea>
									</div>
									<button className="w-full px-6 py-3 rounded-lg bg-yellow text-black font-semibold tracking-wide shadow-lg hover:shadow-yellow/30 transition">
										Envoyer
									</button>
								</form>
							</div>
						</div>
				</div>

				{/* Footer bottom bar personnalisé */}
				<div className="border-t border-white/10 pt-10 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 contact-fade">
					<div className="flex items-center gap-4" id="footer-logo">
						<img src="/images/logo.png" alt="Logo" className="w-14 h-14 rounded-xl ring-1 ring-white/10 p-2 bg-white/5" />
						<div className="space-y-1">
							<p className="font-modern-negra text-xl tracking-wide">Nassim EL HADDAD</p>
							<p className="text-xs text-white/50">Développeur & Créatif Web</p>
							<div className="flex items-center gap-3 text-sm">
								<a href="https://github.com/NassimEH" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-yellow transition" aria-label="GitHub">GitHub</a>
								<span className="text-white/30">•</span>
								<a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-yellow transition" aria-label="LinkedIn">LinkedIn</a>
							</div>
						</div>
					</div>
					<ul className="flex flex-wrap justify-center gap-4 text-[11px] uppercase tracking-wider text-white/50">
						<li>&copy; {new Date().getFullYear()} Tous droits réservés</li>
						<li><a href="#mentions" className="hover:text-yellow">Mentions légales</a></li>
						<li><a href="#confidentialite" className="hover:text-yellow">Confidentialité</a></li>
						<li><a href="#cookies" className="hover:text-yellow">Cookies</a></li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Contact;