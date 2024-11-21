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
};

function AnchorButton({
	children,
	name,
	className,
	startElement,
	endElement,
	variant = 'primary',
	href,
	...props
}: AnchorButtonProps & React.ComponentProps<'a'>) {
	const classNameBase = buttonClassName({ variant });
	return (
		<Link href={href} className={cn(classNameBase, className)} {...props}>
			{startElement && <span className="mr-2">{startElement}</span>}
			{name || children}
			{endElement && <span className="ml-2">{endElement}</span>}
		</Link>
	);
}

export { AnchorButton as Button };
