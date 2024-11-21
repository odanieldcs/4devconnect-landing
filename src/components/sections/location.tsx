import { Button } from '../button';
import { Heading } from '../heading';
import { ArrowIcon } from '../icon';
import { Paragraph } from '../paragraph';

import { metadata } from '@/config';

function Location() {
	return (
		<section
			className="flex justify-center relative px-4 py-11 h-[520px] bg-white"
			id="local"
		>
			<div className="flex flex-col absolute z-20 w-full max-w-7xl items-center md:flex-row gap-16 shadow-md rounded-[40px] bg-gray-50 p-14">
				<img
					src="/acigra-gravatai-rs-brasil.jpg"
					className="w-full h-auto max-w-[540px] rounded-[40px] -rotate-2"
					alt="ACIGRA Gravataí, RS - Brasil"
				/>
				<div className="flex flex-col gap-6">
					<Heading level="h2">Local do evento</Heading>
					<Paragraph className="font-bold">ACIGRA Gravataí/RS</Paragraph>
					<address className="text-primary not-italic text-base max-w-48">
						Rua Pref. José Linck, 701{' '}
						<span className="block">Bairro Centro</span> Gravataí - RS - Brasil
					</address>
					<Button
						name="Confira como chegar"
						href={metadata.addressUrl}
						variant="secondary"
						className="text-secondary"
						endElement={<ArrowIcon direction="right" />}
					/>
				</div>
			</div>
			<div className="absolute w-full bottom-0 h-1/2 bg-orange-pink-light bg-repeat-x z-10"></div>
		</section>
	);
}

export { Location };
