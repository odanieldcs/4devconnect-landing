import { Button } from '../button';
import { Heading } from '../heading';
import { ArrowIcon } from '../icon';
import { Paragraph } from '../paragraph';
import { Talk, type TalkProps } from '../talk';

const talks: TalkProps[] = [
	{
		position: 'start',
		title: 'Início do Credenciamento',
		time: '08:00',
	},
	{
		position: 'middle',
		title: 'Abertura do evento',
		time: '09:00',
	},
	{
		position: 'middle',
		title: 'Palestra com Daniel Castro',
		description: 'A talk about something',
		speaker: {
			avatar: 'http://localhost:6006/speaker/speaker-sample-1.jpg',
			company: 'DDEVs',
			linkedin: 'https://linkedin.com/in/ddevs',
			name: 'Daniel Castro',
			role: 'Full Stack Software Engineer',
		},
		time: '10:00',
	},
	{
		position: 'middle',
		title: 'Palestra com Ana Silva',
		description: 'A talk about something',
		speaker: {
			avatar: 'http://localhost:6006/speaker/speaker-sample-2.jpg',
			company: 'DDEVs',
			linkedin: 'https://linkedin.com/in/ddevs',
			name: 'Ana Silva',
			role: 'Full Stack Software Engineer',
		},
		time: '11:00',
	},
	{
		position: 'middle',
		title: 'Intervalo para o almoço',
		time: '12:00',
	},
	{
		position: 'middle',
		title: 'Palestra com João Pereira',
		description: 'A talk about something',
		speaker: {
			avatar: 'http://localhost:6006/speaker/speaker-sample-4.jpg',
			company: 'DDEVs',
			linkedin: 'https://linkedin.com/in/ddevs',
			name: 'João Pereira',
			role: 'Full Stack Software Engineer',
		},
		time: '13:00',
	},
	{
		position: 'middle',
		title: 'Palestra com Maria Oliveira',
		description: 'A talk about something',
		speaker: {
			avatar: 'http://localhost:6006/speaker/speaker-sample-3.jpg',
			company: 'DDEVs',
			linkedin: 'https://linkedin.com/in/ddevs',
			name: 'Maria Oliveira',
			role: 'Full Stack Software Engineer',
		},
		time: '14:00',
	},
	{
		position: 'end',
		title: 'Encerramento do evento',
		time: '15:00',
	},
];

function Schedule() {
	return (
		<section className="flex flex-col w-full md:flex-row justify-between gap-10">
			<div className="flex flex-col max-w-80 gap-6">
				<Heading level="h1" className="md:text-left">
					Programação do evento
				</Heading>
				<Paragraph>
					Confira a grade de palestras previstas para o dia 14 de Dezembro:
				</Paragraph>
				<div className="flex flex-col items-start gap-4">
					<Paragraph>Quer palestrar no evento?</Paragraph>
					<Button
						href="#"
						variant="secondary"
						name="Envie sua palestra até 30/Nov."
						className="text-secondary bg-transparent"
						endElement={<ArrowIcon direction="right" />}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-8">
				<div className="flex flex-col items-start">
					{talks.map((talk, index) => (
						<Talk key={index} {...talk} />
					))}
				</div>
				<p className="text-primary/50 text-xs/4 w-full max-w-80">
					* Horários e informações podem sofrer alterações sem aviso prévio até
					o dia do evento.
				</p>
			</div>
		</section>
	);
}

export { Schedule };
