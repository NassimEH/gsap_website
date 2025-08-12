import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { navLinks } from '../../constants/index.js';

const Navbar = () => {
	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: 'nav',
				start: 'bottom top'
			}
		});

		navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
			backgroundColor: '#050505cc',
			backdropFilter: 'blur(12px)',
			duration: 0.8,
			ease: 'power1.out'
		});
	});

	return (
		<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10">
			<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
				<a href="#hero" className="flex items-center gap-3 group">
					<img src="/images/logo.png" alt="logo" className="w-10 h-10" />
					<p className="font-modern-negra text-lg tracking-wide text-white group-hover:text-yellow transition-colors">Milky Deal</p>
				</a>
				<ul className="hidden md:flex items-center gap-6 text-sm font-medium">
					{navLinks.map(link => (
						<li key={link.id}>
							<a
								href={`#${link.id}`}
								className="text-white/70 hover:text-yellow transition-colors tracking-wide relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-yellow hover:after:w-full after:transition-all"
							>
								{link.title}
							</a>
						</li>
					))}
				</ul>
				<div className="md:hidden">
					{/* Future: mobile menu toggle */}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;