import { Button } from '../button';
import { Heading } from '../heading';
import { TagIcon } from '../icon';
import { Paragraph } from '../paragraph';

import { metadata } from '@/config';

function Subscribe() {
	return (
		<section className="flex flex-col bg-white py-11 px-4 gap-7 items-center w-full text-left">
			<Heading level="h2">Garanta sua vaga</Heading>
			<Paragraph className="text-left md:text-center md:text-base">
				Venha trocar conhecimentos e fazer novas conexões.
			</Paragraph>
			<Button
				name="Inscreva-se agora mesmo!"
				variant="primary"
				startElement={<TagIcon className="border-white" />}
				href={metadata.subscribeUrl}
			/>
		</section>
	);
}

export { Subscribe };
