import Link from 'next/link';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';

const fakeURL =
	'https://placehold.co/200x100/FFFFFF/A0A0A0?text=company&font=Source%20Sans%20Pro';

const sponsors = {
	master: [
		{
			image: '/sponsors/softdesign-patrocinio-master.png',
			name: 'SoftDesign',
			url: 'https://softdesign.com.br/',
		},
		{
			image: '/sponsors/azion-patrocinio-master.png',
			name: 'Azion | Plataforma de Edge Computing',
			url: 'https://azion.com/',
		},
	],
	sponsors: [
		{
			image: fakeURL,
			name: 'Patrocinador 1',
			url: '#',
		},
		{
			image: fakeURL,
			name: 'Patrocinador 2',
			url: '#',
		},
		{
			image: fakeURL,
			name: 'Patrocinador 3',
			url: '#',
		},
		{
			image: fakeURL,
			name: 'Patrocinador 4',
			url: '#',
		},
	],
};

function SponsorsList({
	sponsors,
}: {
	sponsors: { image: string; name: string; url: string }[];
}) {
	return (
		<div className="w-full grid grid-cols-2 md:flex md:justify-center">
			{sponsors.map((sponsor) => (
				<Link
					href={sponsor.url}
					key={sponsor.name}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						key={sponsor.name}
						src={sponsor.image}
						alt={sponsor.name}
						className="overflow-hidden rounded-3xl h-[100px] w-[200px]"
					/>
				</Link>
			))}
		</div>
	);
}

function Sponsors() {
	return (
		<section className="flex justify-center px-4 py-11" id="realizacao">
			<div className="flex flex-col w-full max-w-7xl">
				<div className="md:flex flex-col gap-4">
					<Heading
						level="h2"
						className="md:text-xl/8 text-center text-primary/45 font-medium"
					>
						Patrocínio Master
					</Heading>
					<SponsorsList sponsors={sponsors.master} />
				</div>
				<div className="flex flex-col gap-4">
					<Heading
						level="h2"
						className="text-lg/6 md:text-xl/8 text-center text-primary/45 font-medium hidden"
					>
						Patrocínio
					</Heading>
					{/* <div className="flex flex-col gap-4">
						<Paragraph className="text-center text-sm md:text-base text-secondary/75">
							Quer apoiar o evento e ter sua empresa aqui?
						</Paragraph>
						<Paragraph className="text-center text-sm md:text-base text-secondary/75">
							Entre em contato conosco no e-mail{' '}
							<Link
								href="mailto:contato@4devconnect.com"
								title="Envie um e-mail para"
								className="font-medium"
							>
								contato@4devconnect.com
							</Link>{' '}
							e confira as opções.
						</Paragraph>
					</div> */}
					{/* <SponsorsList sponsors={[]} /> */}
				</div>
			</div>
		</section>
	);
}

export { Sponsors };
