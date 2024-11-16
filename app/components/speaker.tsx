export type SpeakerProps = {
	name: string;
	company: string;
	role: string;
	linkedin: string;
	avatar: string;
};

function SpeakerTitle({ role, company }: { role: string; company: string }) {
	const companyName = company && ` @ ${company}`;
	return <p className="text-xs/5 text-secondary">{`${role} ${companyName}`}</p>;
}

function Speaker({ name, company, role, linkedin, avatar }: SpeakerProps) {
	return (
		<div className="flex space-x-2 items-center">
			<img
				src={avatar}
				alt={name}
				className="rounded-full max-w-16 max-h-16 border-[3px] border-white"
			/>
			<div className="flex flex-col">
				<h3 className="font-medium leading-5 tracking-wide text-primary">
					{name}
				</h3>
				<SpeakerTitle role={role} company={company} />
				<a href={linkedin} className="text-sm/4">
					in
				</a>
			</div>
		</div>
	);
}

export { Speaker };
