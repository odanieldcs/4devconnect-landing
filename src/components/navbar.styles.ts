import { tv } from 'tailwind-variants';
import { cn } from '@/helpers/misc';

export const navbarClassName = tv({
	slots: {
		section: cn('flex px-4 py-8 pb-2 md:py-14 md:h-[152px]'),
		container: 'w-full justify-between mx-auto transition-all duration-300',
		navbar: cn('flex w-full max-w-8xl mx-auto items-center justify-between'),
		logo: 'flex w-[202px] h-[26px] md:w-[280px] md:h-[36px]',
	},
	variants: {
		isFixed: {
			true: {
				container:
					'flex md:fixed md:top-0 md:left-0 md:right-0 w-full md:px-4 md:py-8 md:z-[100] backdrop-blur-md bg-orange-pink-light/70 shadow-sm',
				logo: 'w-[249px] h-[32px]',
			},
			false: {
				container: 'max-w-8xl',
			},
		},
	},
});
