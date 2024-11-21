import Link from 'next/link';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';

const fakeURL =
	'https://placehold.co/200x100/FFFFFF/A0A0A0?text=company&font=Source%20Sans%20Pro';

const sponsors = {
	master: [
		{
			image: fakeURL,
			name: 'Patrocinador Master 1',
			url: '#',
		},
		{
			image: fakeURL,
			name: 'Patrocinador',
			url: '#',
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
		<div className="w-full grid grid-cols-2 md:flex md:justify-center gap-8">
			{sponsors.map((sponsor) => (
				<Link href={sponsor.url}>
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
			<div className="flex flex-col w-full max-w-7xl gap-12">
				<div className="hidden md:flex flex-col gap-4">
					<Heading
						level="h2"
						className="md:text-xl/8 md:text-center text-primary/45 font-medium"
					>
						Patrocínio Master
					</Heading>
					<SponsorsList sponsors={[]} />
				</div>
				<div className="flex flex-col gap-4">
					<Heading
						level="h2"
						className="text-lg/6 md:text-xl/8 text-center text-primary/45 font-medium"
					>
						Patrocínio
					</Heading>
					<div className="flex flex-col gap-4">
						<Paragraph className="text-center text-sm md:text-base text-secondary/75">
							Quer apoiar o evento e ter sua empresa aqui?
						</Paragraph>
						<Paragraph className="text-center text-sm md:text-base text-secondary/75">
							Entre em contato conosco no e-mail contato@4devconnect.com e
							confira as opções.
						</Paragraph>
					</div>
					<SponsorsList sponsors={[]} />
				</div>
			</div>
		</section>
	);
}

export { Sponsors };
