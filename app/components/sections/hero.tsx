import { Button } from '../button';
import { Heading } from '../heading';
import { TagIcon } from '../icon';
import { Paragraph } from '../paragraph';

function Hero() {
	return (
		<section className="flex justify-center w-full bg-orange-pink-light">
			<div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-16 gap-8 bg-hero-banner bg-cover rounded-3xl w-full max-w-[1280px] md:h-[460px]">
				<Heading
					level={'h1'}
					className="text-white text-xl/7 text-center md:text-left md:text-4xl font-semibold max-w-[670px]"
				>
					O 1º encontro de DEV&apos;s da região metropolitana de Porto Alegre/RS
				</Heading>
				<div className="flex flex-col gap-4 md:gap-8">
					<Paragraph className="text-white font-semibold md:text-2xl/7 text-right">
						14 Dezembro 2024 <span className="md:block">Gravataí/RS</span>
					</Paragraph>
					<Button
						name="Inscreva-se agora!"
						variant="primary"
						href="#"
						startElement={<TagIcon />}
					/>
				</div>
			</div>
		</section>
	);
}

export { Hero };
