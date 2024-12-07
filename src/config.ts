import { TalkProps } from './components/talk';

export const metadata = {
	subscribeUrl:
		'https://www.sympla.com.br/evento/4dev-connect-rio-grande-do-sul-2024/2704715',
	addressUrl:
		'https://www.google.com/maps/search/ACIGRA,+Rua+Prefeito+Jos%C3%A9+Linck,+701+Centro,+Gravata%C3%AD,+RS',
};

export const avatars = {
	andressa: '/speaker/andressa-gaspar.jpg',
	ed: '/speaker/ed-pereira.jpg',
	robson: '/speaker/robson-junior.jpg',
	luiz: '/speaker/luiz-duarte.jpg',
	rayana: '/speaker/rayana-garay.jpg',
	eduardo: '/speaker/eduardo-garcia.jpg',
	felipe: '/speaker/felipe-bastos.jpg',
};

export const talks: TalkProps[] = [
	{
		position: 'start',
		title: 'Início do credenciamento',
		time: '08:00',
	},
	{
		position: 'middle',
		title: 'Abertura do evento',
		time: '09:00',
	},
	{
		position: 'middle',
		title: 'Palestra à definir',
		description: 'Em breve mais informações',
		time: '09:20',
	},
	{
		position: 'middle',
		title: 'Porque Acessibilidade',
		description: 'na Web Pode Ser Difícil',
		time: '09:55',
		speaker: {
			avatar: avatars.ed,
			name: 'Ed Pereira',
			company: 'na Poatek',
			linkedin: 'https://www.linkedin.com/in/egpereira',
			role: 'Senior Software Engineer',
		},
	},
	{
		position: 'middle',
		title: 'Coffee Break',
		time: '10:25',
	},
	{
		position: 'middle',
		title: 'Palestra à definir',
		description: 'Em breve mais informações',
		time: '10:55',
	},
	{
		position: 'middle',
		title: 'Jornada na Programação',
		description: 'Desafios e crescimento...',
		time: '11:30',
		speaker: {
			avatar: avatars.andressa,
			name: 'Andressa Gaspar',
			company: 'na SoftDesign',
			linkedin: 'https://www.linkedin.com/in/andressa-gaspar/',
			role: 'Software Engineer Front-end',
		},
	},
	{
		position: 'middle',
		title: 'Almoço',
		time: '12:00',
	},
	{
		position: 'middle',
		title: 'Web2 para Web3.',
		description: 'O que muda para o dev?',
		time: '13:30',
		speaker: {
			avatar: avatars.luiz,
			name: 'Luiz Duarte',
			company: 'Agile Coach na LuizTools',
			linkedin: 'https://www.linkedin.com/in/luiztools',
			role: 'Software Specialist e ',
		},
	},
	{
		position: 'middle',
		title: 'Palestra à definir',
		description: 'Em breve mais informações',
		time: '14:05',
	},
	{
		position: 'middle',
		title: 'Intervalo',
		time: '14:40',
	},
	{
		position: 'middle',
		title: 'Management Application',
		description: 'com Azion Edge Computing',
		time: '15:10',
		speaker: {
			avatar: avatars.robson,
			name: 'Robson Júnior',
			company: 'na Azion',
			linkedin: 'https://www.linkedin.com/in/robsongajunior/',
			role: 'Senior Software Engineer',
		},
	},
	{
		position: 'middle',
		title: 'Palestra à definir',
		description: 'Em breve mais informações',
		time: '15:45',
	},
	{
		position: 'end',
		title: 'Sorteios',
		time: '16:20',
	},
	{
		position: 'end',
		title: 'Encerramento & Happy Hour',
		time: '17:00',
	},
];
