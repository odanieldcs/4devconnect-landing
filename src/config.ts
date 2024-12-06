import { TalkProps } from './components/talk';

export const metadata = {
  subscribeUrl:
    'https://www.sympla.com.br/evento/4dev-connect-rio-grande-do-sul-2024/2704715',
  addressUrl:
    'https://www.google.com/maps/search/ACIGRA,+Rua+Prefeito+Jos%C3%A9+Linck,+701+Centro,+Gravata%C3%AD,+RS',
};

export const avatars = {
  andressa: '/speaker/andressa.jpeg',
  robson: '/speaker/robson-junior.jpeg',
  luiz: '/speaker/luiz-duarte.jpeg',
  rayana: '/speaker/rayana.jpg',
  eduardo: '/speaker/eduardo-garcia.jpeg',
  felipe: '/speaker/felipe-bastos.jpeg'
}

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
    title: 'Management Application com Azion Edge Computing',
    description: 'Exploraremos ferramentas de gerenciamento e técnicas avançadas de otimização para Web Applications, aproveitando o poder do Edge Computing. Além disso, apresentaremos um CLI com recursos robustos de IaC, proporcionando uma experiência do desenvolvedor aprimorada para configurar e otimizar processos de delivery.',
    time: '09:55',
    speaker: {
      avatar: avatars.robson,
      name: 'Robson Júnior',
      company: 'azion',
      linkedin: 'https://www.linkedin.com/in/robsongajunior/',
      role: 'Senior Software Engineer'
    }
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
    title: 'Jornada na programação',
    description: 'Abordaremos os desafios enfrentados na carreira de programação, explorando o crescimento pessoal e profissional. Discutiremos o que o mercado espera de nós e as ações necessárias para garantir uma evolução constante na área.',
    time: '11:30',
    speaker: {
      avatar: avatars.andressa,
      name: 'Andressa',
      company: 'softdesign',
      linkedin: 'https://www.linkedin.com/in/andressa-gaspar/',
      role: 'Software Engineer Front-end'
    }
  },
  {
    position: 'middle',
    title: 'Almoço',
    time: '12:00',
  },
  {
    position: 'middle',
    title: 'Web2 para Web3. O que muda para o dev?',
    description: 'Entenda as principais diferenças práticas e técnicas entre o desenvolvimento web 2.0 para a 3º da web e o que estudar para desenvolver aplicações web3.',
    time: '13:30',
    speaker: {
      avatar: avatars.luiz,
      name: 'Luiz',
      company: 'luiztools',
      linkedin: 'https://www.linkedin.com/in/luiztools',
      role: 'Software Specialist | Agile Coach'
    }
  },
  {
    position: 'middle',
    title: 'Integrando LLMs e Machine Learning em Processos de Dados: o que você precisa conhecer',
    description: 'Eduardo Garcia e Felipe Bastos',
    time: '14:05',
   // falta aqui
  },
  {
    position: 'middle',
    title: 'Intervalo',
    time: '14:40',
  },
  {
    position: 'middle',
    title: 'Palestra à definir',
    description: 'Em breve mais informações',
    time: '15:10',
  },
  {
    position: 'middle',
    title: 'Integrando Desenvolvedores no Discovery: Uma Abordagem Colaborativa',
    description: 'vamos explorar a importância do envolvimento dos desenvolvedores na fase de discovery de um projeto. Discutiremos como a colaboração entre as equipes de design e desenvolvimento desde o início pode aprimorar a compreensão das necessidades do usuário, otimizar processos e evitar retrabalho. Através de exemplos práticos, abordaremos os benefícios dessa integração, promovendo soluções mais eficientes e alinhadas com os objetivos do produto, além de incentivar um trabalho mais coeso e eficaz entre as equipes.',
    time: '15:45',
    speaker: {
      avatar: avatars.rayana,
      name: 'Rayana',
      company: 'globo',
      linkedin: 'https://www.linkedin.com/in/rayana-garay',
      role: 'Product Designer'
    }
  },
  {
    position: 'end',
    title: 'Sorteios e encerramento',
    time: '16:20',
  },
];
