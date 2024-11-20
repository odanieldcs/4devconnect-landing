import { TalkProps } from './components/talk';

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
			avatar: 'http://localhost:5173/speaker/speaker-sample-1.jpg',
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
			avatar: 'http://localhost:5173/speaker/speaker-sample-2.jpg',
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
			avatar: 'http://localhost:5173/speaker/speaker-sample-4.jpg',
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
			avatar: 'http://localhost:5173/speaker/speaker-sample-3.jpg',
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
