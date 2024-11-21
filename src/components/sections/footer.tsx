import Link from 'next/link';
import { Heading } from '../heading';

function Footer() {
	return (
		<footer className="flex flex-col w-full justify-center items-center">
			<div className="flex w-full max-w-7xl justify-between py-11">
				<div className="flex flex-col gap-4 items-center w-full">
					<Heading
						level="h2"
						className="md:text-xl/8 md:text-center text-primary/45 font-medium"
					>
						Realização
					</Heading>
					<img
						src="/sponsors/ddevs.png"
						alt="DDEVs - "
						className="overflow-hidden rounded-3xl h-[100px] w-[200px]"
					/>
				</div>
				<div className="flex flex-col gap-4 w-full items-center justify-center">
					<Heading
						level="h2"
						className="md:text-xl/8 md:text-center text-primary/45 font-medium"
					>
						Apoio
					</Heading>
					<img
						src="/sponsors/gdg-porto-alegre.png"
						alt="Google Developers Group Porto Alegre"
						className="overflow-hidden rounded-3xl h-[100px] w-[200px]"
					/>
				</div>
			</div>
			<div className="flex w-full bottom-0 h-18 bg-buidling bg-white bg-repeat-x z-10"></div>
			<div className="flex flex-col w-full justify-center items-center gap-4 bg-white py-10 text-primary/40 text-xs/6">
				<nav className="flex md:flex-row gap-8">
					<span>Um evento realizado por DDEVs - 2024</span>
					<Link
						href="/#"
						title="Confira o código de conduta"
						className="font-medium"
					>
						Código de conduta
					</Link>
					<Link
						href="mailto:contato@4devconnect.com"
						title="Envie um e-mail para"
						className="font-medium"
					>
						contato@4devconnect.com
					</Link>
				</nav>
				<p className="text-center">
					Built with{' '}
					<Link href="https://remix.run/" title="Remix" className="font-medium">
						NEXT.js
					</Link>
					, and hosted on{' '}
					<Link
						href="https://www.azion.com/pt-br/"
						title="Azion"
						className="font-medium"
					>
						Edge with Azion
					</Link>
				</p>
			</div>
		</footer>
	);
}

export { Footer };
