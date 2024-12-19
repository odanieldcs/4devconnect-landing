import { Button } from '../button';
import { Heading } from '../heading';
import { TagIcon } from '../icon';
import { Paragraph } from '../paragraph';

function Subscribe() {
	return (
		<section className="flex flex-col bg-white py-11 px-6 md:px-4 gap-4 md:gap-7 items-center w-full text-left">
			<Heading level="h2">Garanta sua vaga</Heading>
			<Paragraph className="text-center md:text-base">
				Venha compartilhar conhecimentos e construir novas conexões.
			</Paragraph>

			<Button
				name="Evento encerrado"
				variant="primary"
				startElement={<TagIcon className="border-white" />}
				href="#"
				rel="noopener noreferrer"
				disabled
			/>
		</section>
	);
}

export { Subscribe };
