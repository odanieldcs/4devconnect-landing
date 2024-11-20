import { Button } from '../button';
import { Heading } from '../heading';
import { ArrowIcon } from '../icon';
import { Paragraph } from '../paragraph';

function Location() {
	return (
		<section className="flex flex-col items-center md:flex-row gap-16 shadow-md w-full rounded-[40px] bg-gray-50 p-14">
			<img
				src="/acigra-gravatai-rs-brasil.jpg"
				className="w-full h-auto max-w-[540px] rounded-[40px] -rotate-2"
				alt="ACIGRA Gravataí, RS - Brasil"
			/>
			<div className="flex flex-col gap-6">
				<Heading level="h2">Location</Heading>
				<Paragraph className="font-bold">ACIGRA Gravataí/RS</Paragraph>
				<address className="text-primary not-italic text-base max-w-48">
					Rua Pref. José Linck, 701 <span className="block">Bairro Centro</span>{' '}
					Gravataí - RS - Brasil
				</address>
				<Button
					name="Confira como chegar"
					href=""
					variant="secondary"
					className="text-secondary"
					endElement={<ArrowIcon direction="right" />}
				/>
			</div>
		</section>
	);
}

export { Location };
