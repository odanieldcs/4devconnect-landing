'use client';
import Link from 'next/link';
import { Heading } from '../heading';
import { useState } from 'react';
import { Dialog } from '../dialog';
import { Paragraph } from '../paragraph';

function Footer() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<Dialog isOpen={isOpen} setIsOpen={setIsOpen} title="Código de conduta">
				<Paragraph>
					Todos os participantes, palestrantes, representantes e voluntários
					devem seguir este código de conduta. A equipe organizadora garantirá
					que ele seja cumprido durante o evento, contamos com a colaboração de
					todos para manter um ambiente seguro.
				</Paragraph>
				<Paragraph className="font-bold">Nossos padrões</Paragraph>
				<Paragraph>
					Nosso evento é um espaço livre de assédio, independentemente de sexo,
					identidade de gênero, orientação sexual, etnia, religião ou qualquer
					outra característica. Não toleramos assédio de nenhum tipo. Quem
					violar este código de conduta poderá ser expulso do evento, ter sua
					participação cancelada sem reembolso e, em casos graves, as
					autoridades poderão ser acionadas, a critério da organização.
				</Paragraph>
				<Paragraph className="font-bold">Relato de Violação</Paragraph>
				<Paragraph>
					A organização está comprometida em garantir um ambiente seguro e
					respeitoso durante o evento. Caso presencie ou enfrente qualquer
					violação do código de conduta, por favor, entre em contato conosco
					enviando um e-mail para{' '}
					<Link
						href="mailto:contato@4devconnect.com"
						title="Envie um e-mail para"
						className="font-medium"
					>
						contato@4devconnect.com
					</Link>{' '}
					ou procure um dos organizadores do evento. Estamos aqui para ouvir e
					tomar as medidas necessárias, com total confidencialidade, para
					garantir a segurança e o bem-estar de todos.
				</Paragraph>
			</Dialog>
			<footer className="flex flex-col w-full justify-center items-center">
				<div className="flex flex-col-reverse md:flex-row w-full max-w-7xl justify-between px-4 md:px-0 md:py-11">
					<div className="flex flex-col md:gap-4 items-center w-full">
						<Heading
							level="h2"
							className="text-lg/6 md:text-xl/8 text-center text-primary/45 font-medium"
						>
							Realização
						</Heading>
						<Link
							href="https://www.linkedin.com/company/oddevs/"
							title="DDEV's by Daniel Castro"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/sponsors/ddevs.png"
								alt="DDEV's, by Daniel Castro"
								className="overflow-hidden rounded-3xl h-[100px] w-[200px]"
							/>
						</Link>
					</div>
					<div className="flex flex-col md:gap-4 w-full items-center justify-center">
						<Heading
							level="h2"
							className="text-lg/6 md:text-xl/8 text-center text-primary/45 font-medium"
						>
							Apoio
						</Heading>
						<div className="grid gap-0 md:flex">
							<Link
								href="https://www.linkedin.com/company/gdg-porto-alegre/"
								title="GDG Porto Alegre - RS"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="/sponsors/gdg-porto-alegre.png"
									alt="GDG Porto Alegre - RS"
									className="overflow-hidden rounded-3xl h-[100px] w-[200px]"
								/>
							</Link>
							<Link
								href="https://www.linkedin.com/company/osgufers"
								title="GUFERS - Grupo de Usuários de Front End"
								target="_blank"
								rel="noopener noreferrer"
								className="md:ml-4 justify-center flex"
							>
								<img
									src="/sponsors/gufers.png"
									alt="GUFERS - Grupo de Usuários de Front End"
									className="overflow-hidden rounded-3xl h-[100px] w-[132px]"
								/>
							</Link>
							<Link
								href="https://www.fiap.com.br/"
								title="Alura + FIAP"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="/sponsors/alura-fiap.png"
									alt="Alura + FIAP"
									className="overflow-hidden rounded-3xl h-[100px] w-[200px]"
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className="flex w-full bottom-0 h-18 bg-buidling bg-white bg-repeat-x z-10"></div>
				<div className="flex flex-col w-full justify-center items-center gap-4 bg-white py-10 text-primary/40 text-xs/6">
					<nav className="flex flex-col text-center md:text-left md:flex-row gap-4 md:gap-8">
						<span>Um evento realizado por DDEV's - 2024</span>
						<button
							type="button"
							className="font-medium"
							title="Confira o código de conduta"
							onClick={() => setIsOpen(true)}
						>
							Código de conduta
						</button>
						<Link
							href="mailto:contato@4devconnect.com"
							title="Envie um e-mail para"
							className="font-medium"
						>
							contato@4devconnect.com
						</Link>
					</nav>
					<p className="text-center">
						Built with{' '}
						<Link
							href="https://nextjs.org/"
							title="Next.JS"
							className="font-medium"
							target="_blank"
							rel="noopener noreferrer"
						>
							NEXT.JS
						</Link>
						, and hosted on{' '}
						<Link
							href="https://www.azion.com/pt-br/"
							title="Azion"
							className="font-medium"
							target="_blank"
							rel="noopener noreferrer"
						>
							Edge with Azion
						</Link>
					</p>
				</div>
			</footer>
		</>
	);
}

export { Footer };
