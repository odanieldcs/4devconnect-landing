import Link from 'next/link';
import { cn } from '@/helpers/misc';
import { buttonClassName } from './button.styles';

export type AnchorButtonProps = {
	children?: React.ReactNode;
	name?: string;
	startElement?: React.ReactNode;
	endElement?: React.ReactNode;
	variant: 'primary' | 'secondary';
	href: string;
	disabled?: boolean
};

function AnchorButton({
	children,
	name,
	className,
	startElement,
	endElement,
	variant = 'primary',
	href,
	disabled,
	...props
}: AnchorButtonProps & React.ComponentProps<'a'>) {
	const classNameBase = buttonClassName({ variant });
	return (
		<Link href={href} className={cn(classNameBase, className, disabled && 'disabled')} {...props}>
			{startElement && <span className="mr-2">{startElement}</span>}
			{name || children}
			{endElement && <span className="ml-2">{endElement}</span>}
		</Link>
	);
}

export { AnchorButton as Button };
