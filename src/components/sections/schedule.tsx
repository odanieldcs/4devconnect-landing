import { Button } from '../button';
import { Heading } from '../heading';
import { ArrowIcon } from '../icon';
import { Paragraph } from '../paragraph';
import { Talk, type TalkProps } from '../talk';

export type ScheduleProps = {
	talks: TalkProps[];
};

function Schedule({ talks }: ScheduleProps) {
	return (
		<section className="flex w-full justify-center gap-10 px-4 py-11 bg-white">
			<div className="flex flex-col md:flex-row w-full max-w-6xl justify-between">
				<div className="flex flex-col gap-6">
					<Heading level="h1" className="md:text-left max-w-72">
						Programação do evento
					</Heading>
					<Paragraph className="max-w-80">
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
						* Horários e informações podem sofrer alterações sem aviso prévio
						até o dia do evento.
					</p>
				</div>
			</div>
		</section>
	);
}

export { Schedule };
