import { Button } from '../button';
import { Heading } from '../heading';
import { TagIcon } from '../icon';
import { Paragraph } from '../paragraph';

function Subscribe() {
	return (
		<section className="flex flex-col gap-7 items-center w-full text-left">
			<Heading level="h2">Garanta sua vaga</Heading>
			<Paragraph className="text-left md:text-center md:text-base">
				Venha trocar conhecimentos e fazer novas conexões.
			</Paragraph>
			<Button
				name="Inscreva-se agora mesmo!"
				variant="primary"
				startElement={<TagIcon className="border-white" />}
				href="https://www.sympla.com.br/evento/4dev-connect-rio-grande-do-sul-2024/2704715"
			/>
		</section>
	);
}

export { Subscribe };
