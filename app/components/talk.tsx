import { Speaker, SpeakerProps } from './speaker';

export type TalkProps = {
	title: string;
	description?: string;
	speaker?: SpeakerProps;
};

function Talk({ title, description, speaker }: TalkProps) {
	return (
		<div className="flex space-x-2 items-center bg-light py-3 px-4 rounded-xl">
			<div className="flex flex-col text-right">
				<h2 className="text-base/6 font-medium text-primary -tracking-wide">
					{title}
				</h2>
				{description && <p className="text-xs/6 text-primary">{description}</p>}
			</div>
			{speaker && <Speaker {...speaker} />}
		</div>
	);
}

export { Talk };
