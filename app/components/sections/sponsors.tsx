import { Heading } from '../heading';

const fakeURL =
	'https://placehold.co/200x100/FFFFFF/A0A0A0?text=company&font=Source%20Sans%20Pro';

const sponsors = {
	master: [
		{
			image: fakeURL,
			name: 'Patrocinador Master 1',
		},
		{
			image: fakeURL,
			name: 'Patrocinador',
		},
	],
	sponsors: [
		{
			image: fakeURL,
			name: 'Patrocinador 1',
		},
		{
			image: fakeURL,
			name: 'Patrocinador 2',
		},
		{
			image: fakeURL,
			name: 'Patrocinador 3',
		},
		{
			image: fakeURL,
			name: 'Patrocinador 4',
		},
	],
};

function SponsorsList({
	sponsors,
}: {
	sponsors: { image: string; name: string }[];
}) {
	return (
		<div className="w-full grid grid-cols-2 md:flex md:justify-center gap-8">
			{sponsors.map((sponsor) => (
				<img
					key={sponsor.name}
					src={sponsor.image}
					alt={sponsor.name}
					className="overflow-hidden rounded-3xl h-[100px] w-[200px]"
				/>
			))}
		</div>
	);
}

function Sponsors() {
	return (
		<div className="flex flex-col w-full gap-12">
			<div className="flex flex-col gap-4">
				<Heading
					level="h2"
					className="md:text-xl/8 md:text-center text-primary/45 font-medium"
				>
					Patrocínio Master
				</Heading>
				<SponsorsList sponsors={sponsors.master} />
			</div>
			<div className="flex flex-col gap-4">
				<Heading
					level="h2"
					className="md:text-xl/8 md:text-center text-primary/45 font-medium"
				>
					Patrocínio
				</Heading>
				<SponsorsList sponsors={sponsors.sponsors} />
			</div>
		</div>
	);
}

export { Sponsors };
