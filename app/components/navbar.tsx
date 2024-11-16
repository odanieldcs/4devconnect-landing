import { Link } from '@remix-run/react';

const LINKS = [
	{
		name: 'Programação',
		to: '/#programacao',
	},
	{
		name: 'Local',
		to: '/#local',
	},
	{
		name: 'CFP',
		to: '/#cfp',
	},
	{
		name: 'Sobre',
		to: '/#sobre',
	},
	{
		name: 'Realização',
		to: '/#realizacao',
	},
];

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
	return (
		<Link
			to={to}
			className="underlined block whitespace-nowrap text-secondary font-semibold hover:text-primary focus:no-underline transition-colors"
		>
			{children}
		</Link>
	);
}

function Navbar() {
	return (
		<section className="flex px-4 py-14">
			<nav className="flex w-full max-w-8xl mx-auto items-center justify-between">
				<div className="flex">
					<Link to={'/'} title="4Dev Connect">
						<img src="/logo.svg" alt="4Dev Connect" width={280} height={36} />
					</Link>
				</div>
				<ul className="flex">
					{LINKS.map(({ name, to }) => (
						<li key={to} className="px-4 py-2">
							<NavLink to={to}>{name}</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
}

export { Navbar };
