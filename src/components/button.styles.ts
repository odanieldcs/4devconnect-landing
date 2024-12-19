import { tv } from 'tailwind-variants';
import { cn } from '@/helpers/misc';

export const buttonClassName = tv({
	base: cn(
		'inline-block px-6 py-2 outline-none',
		'flex space-x-2 items-center',
		'border border-transparent rounded-full font-medium text-base/7',
		'transition duration-150 ease-in-out hover:ring ring-offset-2 disabled:cursor-not-allowed'
	),
	variants: {
		variant: {
			primary: cn(
				'bg-orange-pink ring-orange-pink/35 text-white ring-offset-orange-pink/10',
				'focus:ring-orange-pink/35'
			),
			secondary: cn(
				'bg-white border border-gray-300 ring-primary/15 text-primary ring-offset-primary/5',
				'focus:ring-primary/15'
			),
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
});
