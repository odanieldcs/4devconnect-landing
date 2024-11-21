import { cn } from '@/helpers/misc';

export type IconProps = {
	className?: string;
	size?: number;
};

const arrowRotationMap = {
	up: 'rotate-180',
	right: '-rotate-90',
	down: 'rotate-0',
	left: 'rotate-90',
};

export function ArrowIcon({
	direction,
	size = 20,
	className,
}: {
	direction: 'up' | 'down' | 'left' | 'right';
} & IconProps) {
	return (
		<svg
			width={size}
			height={size}
			className={cn(className, 'transform', arrowRotationMap[direction])}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export function TagIcon({ className, size = 20 }: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			className={className}
			viewBox="0 0 17 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_61_14)">
				<path
					d="M14.2266 9.71775L9.44665 14.4977C9.32282 14.6217 9.17576 14.7201 9.0139 14.7872C8.85204 14.8543 8.67853 14.8888 8.50331 14.8888C8.32809 14.8888 8.15459 14.8543 7.99273 14.7872C7.83086 14.7201 7.68381 14.6217 7.55998 14.4977L1.83331 8.77775V2.11108H8.49998L14.2266 7.83775C14.475 8.08757 14.6144 8.4255 14.6144 8.77775C14.6144 9.13 14.475 9.46793 14.2266 9.71775Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.16669 5.44458H5.17252"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_61_14">
					<rect
						width="16"
						height="16"
						fill="currentColor"
						transform="translate(0.5 0.777832)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}
