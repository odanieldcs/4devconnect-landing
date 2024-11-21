'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navbarClassName } from './navbar.styles';

const LINKS = [
	{
		name: 'Programação',
		to: 'programacao',
	},
	{
		name: 'Local',
		to: 'local',
	},
	{
		name: 'CFP',
		to: 'cfp',
	},
	{
		name: 'Sobre',
		to: 'sobre',
	},
	{
		name: 'Realização',
		to: 'realizacao',
	},
];

function scrollToSection(
	event: React.MouseEvent<HTMLAnchorElement>,
	id: string
) {
	event.preventDefault();
	const element = document.getElementById(id);
	element?.scrollIntoView({ behavior: 'smooth' });
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
	return (
		<Link
			href={`#${to}`}
			onClick={(event) => scrollToSection(event, to)}
			className="underlined block whitespace-nowrap text-secondary font-semibold hover:text-primary focus:no-underline transition-colors"
		>
			{children}
		</Link>
	);
}

function Navbar() {
	const [isFixed, setIsFixed] = useState(false);
	const { navbar, section, container, logo } = navbarClassName({
		isFixed,
	});

	useEffect(() => {
		function handleScroll() {
			setIsFixed(window.scrollY > 100);
		}

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section className={section()}>
			<div className={container()}>
				<nav className={navbar()}>
					<div className="flex mx-auto md:mx-0">
						<Link
							href={'/'}
							title="4Dev Connect"
							onClick={(event) => scrollToSection(event, 'main')}
						>
							<img src="/logo.svg" alt="4Dev Connect" className={logo()} />
						</Link>
					</div>
					<ul className="hidden md:flex">
						{LINKS.map(({ name, to }) => (
							<li key={to} className="px-4 py-2">
								<NavLink to={to}>{name}</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</section>
	);
}

export { Navbar };
