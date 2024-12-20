import { TalkProps } from './components/talk';

export const metadata = {
	subscribeUrl:
		'https://www.sympla.com.br/evento/4dev-connect-rio-grande-do-sul-2024/2704715',
	addressUrl:
		'https://www.google.com/maps/search/ACIGRA,+Rua+Prefeito+Jos%C3%A9+Linck,+701+Centro,+Gravata%C3%AD,+RS',
};

export const avatars = {
	andressa: '/speaker/andressa-gaspar.jpg',
	alessandro: '/speaker/alessandro-cauduro.jpg',
	ed: '/speaker/ed-pereira.jpg',
	robson: '/speaker/robson-junior.jpg',
	luiz: '/speaker/luiz-duarte.jpg',
	rayana: '/speaker/rayana-garay.jpg',
	eduardo: '/speaker/eduardo-garcia.jpg',
	felipe: '/speaker/felipe-bastos.jpg',
	raryson: '/speaker/raryson-pereira.jpg',
};

export type Speaker = {
	name: string;
	imageUri: string;
	classNames?: string;
};

export const talks: TalkProps[] = [
	{
		position: 'start',
		title: 'Início do credenciamento',
		time: '08:30',
	},
	{
		position: 'middle',
		title: 'Abertura do evento',
		time: '09:00',
	},
	{
		position: 'middle',
		title: 'Explorando tudo que a última',
		description: 'versão do Node pode nos dar',
		speaker: {
			avatar: avatars.raryson,
			name: 'Raryson Pereira',
			company: 'na CloudCosmos',
			linkedin: 'https://www.linkedin.com/in/raryson-pereira-rost-b33438a0',
			role: 'Senior Software Engineer',
		},
		time: '09:20',
	},
	{
		position: 'middle',
		title: 'Por que acessibilidade',
		description: 'na web pode ser difícil',
		time: '09:55',
		speaker: {
			avatar: avatars.ed,
			name: 'Ed Pereira',
			company: 'na Poatek',
			linkedin: 'https://www.linkedin.com/in/egpereira',
			role: 'Software Engineer Front-end',
		},
	},
	{
		position: 'middle',
		title: 'Coffee break',
		time: '10:25',
	},
	{
		position: 'middle',
		title: 'Deploying AI Agents on the edge',
		description: 'real-world applications',
		speaker: {
			avatar: avatars.alessandro,
			name: 'Alessandro Cauduro',
			company: 'na Azion',
			linkedin: 'https://www.linkedin.com/in/alessandrocauduro/',
			role: 'Chief AI Officer',
		},
		time: '10:55',
	},
	{
		position: 'middle',
		title: 'Jornada na Programação',
		description: 'desafios e crescimento',
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
		time: '13:50',
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
		title: 'Integrando LLMs e Machine Learning',
		description: 'em processos de dados',
		time: '14:25',
		speaker: {
			avatar: avatars.eduardo,
			name: 'Eduardo Garcia',
			company: 'na SoftDesign',
			linkedin: 'https://www.linkedin.com/in/eduardomellogarcia/',
			role: 'Software Engineers Full Stack',
			collaborator: {
				avatar: avatars.felipe,
				name: 'Felipe Bastos',
				linkedin: 'https://www.linkedin.com/in/felipefebastos/',
			},
		},
	},
	{
		position: 'middle',
		title: 'Coffee break',
		time: '15:00',
	},
	{
		position: 'middle',
		title: 'Application Management',
		description: 'com Azion Edge Computing',
		time: '15:30',
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
		title: 'Integrando devs no Discovery',
		description: 'uma abordagem colaborativa',
		speaker: {
			avatar: avatars.rayana,
			name: 'Rayana Garay',
			company: 'na Globo',
			linkedin: 'https://www.linkedin.com/in/rayanagaray/',
			role: 'UX Designer',
		},
		time: '16:05',
	},
	{
		position: 'end',
		title: 'Sorteios',
		time: '16:40',
	},
	{
		position: 'end',
		title: 'Encerramento',
		time: '17:15',
	},
];

export const speakers: Speaker[] = [
	{
		name: 'Andressa',
		imageUri: avatars.andressa,
	},
	{
		name: 'Robson Júnior',
		imageUri: avatars.robson,
	},
	{
		name: 'Luiz Duarte',
		imageUri: avatars.luiz,
	},
	{
		name: 'Ed Pereira',
		imageUri: avatars.ed,
	},
	{
		name: 'Eduardo Garcia',
		imageUri: avatars.eduardo,
	},
	{
		name: 'Felipe Bastos',
		imageUri: avatars.felipe,
	},
	{
		name: 'Raryson Pereira',
		imageUri: avatars.raryson,
	},
	{
		name: 'Alessandro Cauduro',
		imageUri: avatars.alessandro,
	},
	{
		name: 'Rayana Garay',
		imageUri: avatars.rayana,
	},
];

export const speakersArray = (array: Speaker[]): Speaker[] => {
	return [...array].sort(() => Math.random() - 0.5);
};

export const calculateLeft = (index: number): string => {
	const leftValues = [
		'left-[-1rem] md:left-0 z-[60]',
		'left-[2rem] md:left-[3rem] z-[59]',
		'left-[4.4rem] md:left-[6rem] z-[58]',
		'left-[7rem] md:left-[9rem] z-[57]',
		'left-[9.3rem] md:left-[12rem] z-[56]',
		'left-[12rem] md:left-[15rem] z-[55]',
		'left-[14.5rem] md:left-[18rem] z-[54]',
		'left-[17rem] md:left-[21rem] z-[53]',
		'left-[19rem] md:left-[24rem] z-[52]',
	];

	return leftValues[index];
};
