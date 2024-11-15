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
		name: 'Call for Papers',
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
			className="text-gray-secondary hover:text-gray-primary hover:underline rounded-sm px-4 py-4 transition-colors"
		>
			{children}
		</Link>
	);
}

function Navbar() {
	return (
		<div className="flex w-full">
			<ul className="flex space-x-4 w-full list-none m-0">
				{LINKS.map(({ name, to }) => (
					<li key={to} className="list-none m-0 p-0">
						<NavLink to={to}>{name}</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
}

export { Navbar };
