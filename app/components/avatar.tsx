import { cn } from '~/helpers/misc';

const sizes = {
	sm: 'w-12 h-12',
	default: 'w-18 h-18',
	lg: 'w-20 h-20',
	xl: 'w-32 h-32',
};

export type AvatarProps = {
	name: string;
	imageUri: string;
	size?: keyof typeof sizes;
	className?: string;
};

function Avatar({ name, size = 'default', imageUri, className }: AvatarProps) {
	const sizeNumber = sizes[size];
	return (
		<img
			src={imageUri}
			alt={name}
			className={cn(
				sizeNumber,
				className,
				'rounded-full border-[3px] border-white w-'
			)}
		/>
	);
}

export { Avatar };
