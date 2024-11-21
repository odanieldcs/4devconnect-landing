import { Heading } from '../heading';
import { Paragraph } from '../paragraph';

function HowToKnow() {
	return (
		<section className="flex justify-center px-4 py-11">
			<div className="flex flex-col items-start gap-4 md:gap-7 shadow-md w-full max-w-7xl rounded-[40px] bg-transparent border border-white p-8 md:p-14">
				<Heading level="h2">É bom saber...</Heading>
				<Paragraph>
					<span className="font-semibold">Alimentação:</span> Joe Hamburgueria,
					Self Pizza, Subway, Churrasco e Comida Mexicana tudo em frente ao
					local do evento, além de MC Donald&apos;s, Burguer King, Calzone no
					Shopping Gravataí, há 10 minutos de distância.
				</Paragraph>
				<Paragraph>
					<span className="font-semibold">Mobilidade:</span> Estacionamento
					público no centro da cidade e paradas de ônibus há 300 metros do
					auditório.
				</Paragraph>
			</div>
		</section>
	);
}

export { HowToKnow };
