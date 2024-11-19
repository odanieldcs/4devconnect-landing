import { Link } from '@remix-run/react';
import { cn } from '~/helpers/misc';
import { buttonClassName } from './button.styles';

export type AnchorButtonProps = {
	children: React.ReactNode;
	startElement?: React.ReactNode;
	endElement?: React.ReactNode;
	variant: 'primary' | 'secondary';
	href: string;
};

function AnchorButton({
	children,
	className,
	startElement,
	endElement,
	variant = 'primary',
	href,
	...props
}: AnchorButtonProps & React.ComponentProps<'a'>) {
	const classNameBase = buttonClassName({ variant });
	return (
		<Link to={href} className={cn(classNameBase, className)} {...props}>
			{startElement && <span className="mr-2">{startElement}</span>}
			{children}
			{endElement && <span className="ml-2">{endElement}</span>}
		</Link>
	);
}

export { AnchorButton as Button };
