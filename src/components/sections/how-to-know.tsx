import { Heading } from '../heading';
import { Paragraph } from '../paragraph';

function HowToKnow() {
  return (
    <section className="flex justify-center px-4 py-11">
      <div className="flex flex-col items-start gap-4 md:gap-7 shadow-md w-full max-w-7xl rounded-[40px] bg-transparent border border-white p-8 md:p-14">
        <Heading level="h2">É bom saber...</Heading>
        <Paragraph>
          <span className="font-semibold">Alimentação:</span> Joe Hamburgueria,
          Self Pizza, Subway, Churrasco e comida mexicana, todos localizados em
          frente ao evento, além de McDonald's, Burger King e Calzone no
          Shopping Gravataí, a apenas 10 minutos de distância.
        </Paragraph>
        <Paragraph>
          <span className="font-semibold">Mobilidade:</span> estacionamento
          público no centro da cidade e pontos de ônibus a 300 metros do
          auditório.
        </Paragraph>
      </div>
    </section>
  );
}

export { HowToKnow };
