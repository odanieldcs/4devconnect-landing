import { cn } from '@/helpers/misc';

type ParagraphProps = {
	children: React.ReactNode;
	className?: string;
};

function Paragraph({ children, className }: ParagraphProps) {
	return (
		<p className={cn('text-base/7 md:text-md/8', className)}>{children}</p>
	);
}

export { Paragraph };
