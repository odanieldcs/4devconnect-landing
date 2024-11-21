import { Button } from '../button';
import { Heading } from '../heading';
import { TagIcon } from '../icon';
import { Paragraph } from '../paragraph';

function Hero() {
	return (
		<section className="flex justify-center relative w-full h-[548px] bg-orange-pink-light  py-11">
			<div className="flex flex-col absolute z-20 md:flex-row justify-between items-center p-8 md:p-16 gap-8 bg-hero-banner bg-cover rounded-3xl w-full max-w-[1280px] md:h-[460px] shadow-md">
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
			<div className="absolute w-full bottom-0 h-1/2 bg-buidling bg-white bg-repeat-x z-10"></div>
		</section>
	);
}

export { Hero };