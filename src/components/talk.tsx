import { Speaker, SpeakerProps } from './speaker';
import { timelineClassName } from './talk.styles';

export type TalkProps = {
	title: string;
	description?: string;
	speaker?: SpeakerProps;
	time: string;
	position: 'start' | 'middle' | 'end' | 'none';
};

function Talk({
	title,
	description,
	speaker,
	time,
	position = 'none',
}: TalkProps) {
	const timelineCss = timelineClassName({ position });
	return (
		<div className="flex justify-center relative items-center gap-4 py-2">
			<div className="inline-flex relative items-center w-16 md:w-20 h-12 justify-center">
				<div className="z-20 w-16 md:w-20 absolute p-4 rounded-2xl bg-orange-pink text-center text-white font-bold text-sm/4 md:text-base/4 -tracking-wide cursor-default transition duration-150 ring-offset-2 hover:ring-2 hover:ring-orange-pink/35">
					{time}
				</div>
				<span className={timelineCss}></span>
			</div>
			<div className="flex flex-col md:flex-row gap-2 md:items-center bg-light py-4 px-5 cursor-default rounded-xl transition duration-150 ring-offset-2 hover:ring-[3px] hover:ring-orange-pink/25">
				<div className="flex flex-col text-left md:text-right justify-center">
					<h2 className="text-sm/5 md:text-base/5 font-semibold text-primary -tracking-wide">
						{title}
					</h2>
					{description && (
						<p className="text-sm/4 text-primary">{description}</p>
					)}
				</div>
				{speaker && <Speaker {...speaker} />}
			</div>
		</div>
	);
}

export { Talk };
