import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	fallback: ['sans-serif'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: '4Dev Connect - 14/12 em Gravataí, RS',
	description:
		"O 1º encontro de DEV's da região metropolitana de Porto Alegre/RS",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body className={poppins.variable}>{children}</body>
		</html>
	);
}
