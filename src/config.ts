import { TalkProps } from './components/talk';

export const metadata = {
	subscribeUrl:
		'https://www.sympla.com.br/evento/4dev-connect-rio-grande-do-sul-2024/2704715',
	cfpUrl: 'https://forms.gle/K3XN8ay2nE9DB29w9',
	addressUrl:
		'https://www.google.com/maps/search/ACIGRA,+Rua+Prefeito+Jos%C3%A9+Linck,+701+Centro,+Gravata%C3%AD,+RS',
};

export const talks: TalkProps[] = [
	{
		position: 'start',
		title: 'Início do Credenciamento',
		time: '08:00',
	},
	{
		position: 'middle',
		title: 'Abertura do evento',
		time: '09:00',
	},
	{
		position: 'middle',
		title: 'Palestra com Daniel Castro',
		description: 'A talk about something',
		speaker: {
			avatar: '/speaker/speaker-sample-1.jpg',
			company: 'DDEVs',
			linkedin: 'https://linkedin.com/in/ddevs',
			name: 'Daniel Castro',
			role: 'Full Stack Software Engineer',
		},
		time: '10:00',
	},
	{
		position: 'middle',
		title: 'Palestra com Ana Silva',
		description: 'A talk about something',
		speaker: {
			avatar: '/speaker/speaker-sample-2.jpg',
			company: 'DDEVs',
			linkedin: 'https://linkedin.com/in/ddevs',
			name: 'Ana Silva',
			role: 'Full Stack Software Engineer',
		},
		time: '11:00',
	},
	{
		position: 'middle',
		title: 'Intervalo para o almoço',
		time: '12:00',
	},
	{
		position: 'middle',
		title: 'Palestra com João Pereira',
		description: 'A talk about something',
		speaker: {
			avatar: '/speaker/speaker-sample-4.jpg',
			company: 'DDEVs',
			linkedin: 'https://linkedin.com/in/ddevs',
			name: 'João Pereira',
			role: 'Full Stack Software Engineer',
		},
		time: '13:00',
	},
	{
		position: 'middle',
		title: 'Palestra com Maria Oliveira',
		description: 'A talk about something',
		speaker: {
			avatar: '/speaker/speaker-sample-3.jpg',
			company: 'DDEVs',
			linkedin: 'https://linkedin.com/in/ddevs',
			name: 'Maria Oliveira',
			role: 'Full Stack Software Engineer',
		},
		time: '14:00',
	},
	{
		position: 'end',
		title: 'Encerramento do evento',
		time: '15:00',
	},
];
