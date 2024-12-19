'use client';
import { speakersArray, Speaker, speakers, calculateLeft } from '@/config';
import { useEffect, useState } from 'react';
import { cn } from '@/helpers/misc';
import { Avatar } from '../avatar';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { Button } from '../button';
import { ArrowIcon } from '../icon';

function About() {
	const [speakersList, setSpeakersList] = useState<Speaker[]>([]);

	useEffect(() => {
		setSpeakersList(speakersArray(speakers));
	}, []);

	return (
		<section
			className="flex justify-center bg-white py-11 px-6 md:px-0"
			id="sobre"
		>
			<div className="flex flex-col w-full max-w-6xl space-y-10 md:space-y-20">
				<Heading
					level="h2"
					className="italic font-medium text-left md:text-center"
				>
					Talks de{' '}
					<strong className="text-orange-pink font-extrabold">
						Dev para Devs
					</strong>
				</Heading>
				<div className="flex flex-col md:flex-row gap-14 items-center">
					<div className="flex flex-col gap-4 text-primary">
						<Paragraph>
							O 1º evento da{' '}
							<strong className="bg-orange-pink/20 px-1 inline-flex">
								Região Metropolitana
							</strong>{' '}
							de Porto Alegre/RS, promovido por profissionais locais para
							incentivar a troca de conhecimentos e networking entre
							profissionais, estudantes e pessoas interessadas na área da
							programação.
						</Paragraph>
						<Paragraph>
							As fotos oficiais da 1ª edição já estão disponíveis, confira!
						</Paragraph>
						<div className="flex justify-center md:justify-start">
							<Button
								name="Ver fotos"
								variant="primary"
								href="/fotos"
								rel="noopener noreferrer"
								endElement={<ArrowIcon direction="right" />}
							/>
						</div>
					</div>
					<div className="flex relative w-full md:max-w-96 max-w-full h-18">
						{speakersList.map((speaker, index) => (
							<div
								className={cn(
									'absolute w-18 bg-white overflow-hidden rounded-full',
									calculateLeft(index),
									speaker.classNames
								)}
								key={speaker.name}
							>
								<Avatar
									imageUri={speaker.imageUri}
									name={speaker.name}
									size="default"
									className={index === 0 ? '' : 'opacity-50'}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export { About };
