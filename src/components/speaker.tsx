import { Avatar } from './avatar';
export type SpeakerProps = {
	name: string;
	company: string;
	role: string;
	linkedin: string;
	avatar: string;
};

function SpeakerTitle({ role, company }: { role: string; company: string }) {
	const companyName = company && ` @${company}`;
	return <p className="text-xs/5 text-secondary">{`${role} ${companyName}`}</p>;
}

function Speaker({ name, company, role, linkedin, avatar }: SpeakerProps) {
	return (
		<div className="flex space-x-2 items-center">
			<Avatar name={name} imageUri={avatar} />
			<div className="flex flex-col">
				<h3 className="font-medium leading-5 -tracking-wide text-primary">
					{name}
				</h3>
				<SpeakerTitle role={role} company={company} />
				<a
					href={linkedin}
					target='_blank'
					rel="noopener noreferrer"
					className="w-6 h-6 text-xs/4 border border-primary/50 rounded-lg py-1 px-1 text-secondary hover:bg-secondary hover:text-white transition-colors"
				>
					in
				</a>
			</div>
		</div>
	);
}

export { Speaker };
