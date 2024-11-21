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
			<div className="inline-flex relative items-center w-20 h-12 justify-center">
				<div className="z-20 w-20 absolute p-4 rounded-2xl bg-orange-pink text-center text-white font-bold text-base/4 -tracking-wide cursor-default transition duration-150 ring-offset-2 hover:ring-2 hover:ring-orange-pink/35">
					{time}
				</div>
				<span className={timelineCss}></span>
			</div>
			<div className="flex space-x-2 items-center bg-light py-3 px-4 cursor-default rounded-xl transition duration-150 ring-offset-2 hover:ring-[3px] hover:ring-orange-pink/25">
				<div className="flex flex-col text-right">
					<h2 className="text-base/6 font-medium text-primary -tracking-wide">
						{title}
					</h2>
					{description && (
						<p className="text-xs/6 text-primary">{description}</p>
					)}
				</div>
				{speaker && <Speaker {...speaker} />}
			</div>
		</div>
	);
}

export { Talk };
