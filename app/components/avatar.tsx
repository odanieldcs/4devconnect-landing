const sizes = {
	sm: '12',
	default: '16',
	lg: '20',
	xl: '32',
};
export type AvatarProps = {
	name: string;
	imageUri: string;
	size?: keyof typeof sizes;
};

function Avatar({ name, size = 'default', imageUri }: AvatarProps) {
	const sizeNumber = sizes[size];
	return (
		<img
			src={imageUri}
			alt={name}
			className={`rounded-full max-w-${sizeNumber} max-h-${sizeNumber} border-[3px] border-white`}
		/>
	);
}

export { Avatar };
