import Link from 'next/link';
import { Heading } from '../heading';

function Footer() {
  return (
    <footer className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col md:flex-row w-full max-w-7xl justify-between px-4 md:px-0 md:py-11">
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
        </div>
      </div>
      <div className="flex w-full bottom-0 h-18 bg-buidling bg-white bg-repeat-x z-10"></div>
      <div className="flex flex-col w-full justify-center items-center gap-4 bg-white py-10 text-primary/40 text-xs/6">
        <nav className="flex flex-col text-center md:text-left md:flex-row gap-4 md:gap-8">
          <span>Um evento realizado por DDEV's - 2024</span>
          <Link
            href="/#"
            title="Confira o código de conduta"
            className="font-medium"
          >
            Código de conduta
          </Link>
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
  );
}

export { Footer };
