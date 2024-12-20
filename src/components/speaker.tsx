import { Avatar } from './avatar';
export type SpeakerProps = {
	name: string;
	company: string;
	role: string;
	linkedin: string;
	avatar: string;
	collaborator?: {
		name: string;
		avatar: string;
		linkedin: string;
	};
};

function SpeakerTitle({ role, company }: { role: string; company: string }) {
	return (
		<div className="flex flex-col w-full">
			<p className="text-xs/4 md:text-sm/4 text-secondary">{role}</p>
			<p className="text-xs/4 md:text-sm/4 text-secondary">{company}</p>
		</div>
	);
}

function Speaker({
	name,
	company,
	role,
	linkedin,
	avatar,
	collaborator,
}: SpeakerProps) {
	const classNameAvatarWidth = collaborator ? 'w-32' : 'w-18';
	return (
		<div className="flex space-x-2 items-center">
			<div className={`inline h-18 w-18 relative ${classNameAvatarWidth}`}>
				<Avatar name={name} imageUri={avatar} className="w-18 h-18" />
				{collaborator && (
					<Avatar
						name={collaborator.name}
						imageUri={collaborator.avatar}
						className="absolute top-0 md:left-[3rem] left-[2rem]"
					/>
				)}
			</div>
			<div className="flex flex-col space-x-0">
				<div className="flex flex-col md:flex-row gap-0.5 md:gap-1.5 font-semibold leading-5 -tracking-wide text-primary">
					<a
						href={linkedin}
						target="_blank"
						title={`Acesse o LinkedIn de ${name}`}
						className="inline-flex"
					>
						<h3 className="font-semibold text-sm/4 md:text-base/6 leading-5 -tracking-wide text-primary hover:text-orange-pink transition-colors duration-500 flex gap-2 items-center">
							{name}
							<img
								src="/linkedin.png"
								alt="LinkedIn"
								className="w-3 h-3 opacity-40"
							/>
						</h3>
					</a>
					{collaborator && (
						<>
							<span className="text-base/6 hidden md:visible">e</span>
							<a
								href={collaborator.linkedin}
								target="_blank"
								title={`Acesse o LinkedIn de ${collaborator.name}`}
								className="inline-flex"
							>
								<h3 className="hover:text-orange-pink transition-colors duration-500 flex gap-1 items-center">
									{collaborator.name}
									<img
										src="/linkedin.png"
										alt="LinkedIn"
										className="w-3 h-3 opacity-40"
									/>
								</h3>
							</a>
						</>
					)}
				</div>
				<SpeakerTitle role={role} company={company} />
			</div>
		</div>
	);
}

export { Speaker };
