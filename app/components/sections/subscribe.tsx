import { Heading } from '../heading';
import { Paragraph } from '../paragraph';

function Subscribe() {
	return (
		<div className="flex flex-col gap-7 items-center w-full text-left">
			<Heading level="h2">Garanta sua vaga</Heading>
			<Paragraph className="text-left md:text-center md:text-base">
				Venha trocar conhecimentos e fazer novas conexões.
			</Paragraph>
			<a
				href="https://www.sympla.com.br/evento/4dev-connect-rio-grande-do-sul-2024/2704715"
				target="_blank"
				title="Inscreva-se agora"
				rel="noreferrer"
				className="inline-block bg-orange-pink text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
			>
				Inscreva-se agora mesmo!
			</a>
		</div>
	);
}

export { Subscribe };
