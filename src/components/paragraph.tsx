import { cn } from '@/helpers/misc';

type ParagraphProps = {
	children: React.ReactNode;
	className?: string;
};

function Paragraph({ children, className }: ParagraphProps) {
	return (
		<p className={cn('text-sm/5 md:text-base/8', className)}>{children}</p>
	);
}

export { Paragraph };
