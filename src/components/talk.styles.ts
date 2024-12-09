import { tv } from 'tailwind-variants';
import { cn } from '@/helpers/misc';

export const timelineClassName = tv({
	base: cn('w-[3px] bg-orange-pink h-14 absolute z-10'),
	variants: {
		position: {
			none: 'h-0',
			start: cn('left-8 md:left-9 top-6'),
			middle: cn('left-8 md:left-9 -top-6 h-[175px] md:h-[120px]'),
			end: cn('left-8 md:left-9 -top-8 bottom-0'),
		},
	},
});
