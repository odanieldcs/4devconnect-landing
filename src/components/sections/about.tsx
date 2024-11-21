import { Avatar } from '../avatar';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';

const speakers = [
	{
		name: 'Speaker 1',
		imageUri: '/speaker/speaker-sample-1.jpg',
		classNames: 'left-0 z-[60]',
	},
	{
		name: 'Speaker 2',
		imageUri: '/speaker/speaker-sample-2.jpg',
		classNames: 'left-[2.125rem] z-[50]',
	},
	{
		name: 'Speaker 3',
		imageUri: '/speaker/speaker-sample-3.jpg',
		classNames: 'left-[4.25rem] z-[40]',
	},
	{
		name: 'Speaker 4',
		imageUri: '/speaker/speaker-sample-4.jpg',
		classNames: 'left-[6.375rem] z-[30]',
	},
	{
		name: 'Speaker 5',
		imageUri: '/speaker/speaker-sample-5.jpg',
		classNames: 'left-[8.5rem] z-[20]',
	},
	{
		name: 'Speaker 6',
		imageUri: '/speaker/speaker-sample-6.jpg',
		classNames: 'left-[10.625rem] z-[10]',
	},
];

function About() {
	return (
		<section
			className="flex justify-center bg-white py-11 px-6 md:px-0"
			id="sobre"
		>
			<div className="flex flex-col w-full max-w-6xl space-y-10 md:space-y-20">
				<Heading
					level="h2"
					className="italic font-medium text-left md:text-center"
				>
					talks de{' '}
					<strong className="text-orange-pink font-extrabold">
						Dev para Devs
					</strong>
				</Heading>
				<div className="flex flex-col md:flex-row gap-14 items-center">
					<div className="flex flex-col gap-4 text-primary">
						<Paragraph>
							O 1º evento da{' '}
							<strong className="bg-orange-pink/20 px-1 inline-flex">
								Região Metropolitana
							</strong>{' '}
							de Porto Alegre/RS, promovido por profissionais locais para
							incentivar a troca de conhecimentos e networking entre
							profissionais, estudantes e pessoas interessadas na área da
							programação.
						</Paragraph>
						<Paragraph>
							Um evento <strong>totalmente gratuito</strong>, mas com vagas
							limitadas, garanta a sua!
						</Paragraph>
					</div>
					<div className="flex relative w-full max-w-64 h-18">
						{speakers.map((speaker, index) => (
							<div
								className={`absolute w-18 bg-white overflow-hidden rounded-full ${speaker.classNames}`}
								key={speaker.name}
							>
								<Avatar
									imageUri={speaker.imageUri}
									name={speaker.name}
									size="default"
									className={index > 0 ? 'opacity-50' : ''}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export { About };
