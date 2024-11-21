import { tv } from 'tailwind-variants';
import { cn } from '@/helpers/misc';

export const navbarClassName = tv({
	slots: {
		section: cn('flex px-4 py-14 h-[152px]'),
		container: 'w-full justify-between mx-auto transition-all duration-300',
		navbar: cn('flex w-full max-w-8xl mx-auto items-center justify-between'),
		logo: 'flex w-[280px] h-[36px]',
	},
	variants: {
		isFixed: {
			true: {
				container:
					'flex fixed top-0 left-0 right-0 w-full px-4 py-8 z-[100] backdrop-blur-md bg-orange-pink-light/70 shadow-sm',
				logo: 'w-[249px] h-[32px]',
			},
			false: {
				container: 'max-w-8xl',
			},
		},
	},
});
