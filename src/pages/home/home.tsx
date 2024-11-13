import "../../App.css";
import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import ImageOdonto1 from "../../assets/images/Odontopediatria.png";
import ImageOdonto2 from "../../assets/images/ortodontia.png";
import ImageOdonto3 from "../../assets/images/profissionais.png";
import ImageOdonto4 from "../../assets/images/implantes.png";
import ImageOdonto5 from "../../assets/images//bucal2.png";
import ImageOdonto6 from "../../assets/images/proteses.png";
import Header from "../../components/Header/Header";
import { FormContact } from "../../components/ContactForm/ContactForm";
import Button from "../../components/Button/button";
import ButtonIcon from "../../components/Button/ButtonIcon/buttonIcon";
import { IoIosArrowForward } from "react-icons/io";
const CarouselDataItems = [
  {
    id: 1,
    title: "Odontopediatria",
    descrition:
      "Cuidados dentários para crianças, incluindo prevenção de cáries, orientação sobre higiene bucal e aplicação de flúor.",
    url: ImageOdonto1,
  },
  {
    id: 2,
    title: "Cirurgia bucal",
    descrition:
      "Procedimentos como extração de dentes (especialmente do siso), cirurgias gengivais e de correção óssea.",
    url: ImageOdonto2,
  },
  {
    id: 3,
    title: "Especializações",
    descrition:
      "Conheça todas as nossas especializações e conheça nossos profissionais!",
    url: ImageOdonto3,
  },
  {
    id: 4,
    title: "Implantes dentários",
    descrition:
      "Colocação de pinos de titânio no osso maxilar para substituir dentes perdidos.",
    url: ImageOdonto4,
  },
  {
    id: 5,
    title: "Clareamento dental",
    descrition:
      "Procedimento estético para clarear os dentes, podendo ser realizado no consultório ou com produtos de uso doméstico.",
    url: ImageOdonto5,
  },
  {
    id: 6,
    title: "Próteses dentárias",
    descrition:
      "Substituição de dentes perdidos com próteses fixas (coroas, pontes) ou removíveis (dentaduras).",
    url: ImageOdonto6,
  },
];

const Home: React.FC = () => {
  document.title = "Bem vindos";
  return (
    <div className="w-full h-full gap-y-2 pt-10 px-0">
      <Header />
      <Carousel
        autoplay
        dataItems={CarouselDataItems}
        transitionDuration={400}
        className="mt-6 sm:mt-8 h-80 sm:h-[500px]"
      />

      <div>
        <FormContact />
      </div>

      <section className="flex w-full bg-slate-100 px-8 py-10" id="about">
        <div className="w-full flex flex-row">
          <div className="flex flex-col gap-x-4 sm:flex-row">
            <div className="flex flex-col sm:w-9/12 mb-8">
              <h4 className="bebas-font-medium tracking-widest text-3xl text-start ">
                SOBRE NÓS
              </h4>
              <p className="text-start">
                A ClinicFlow se concentra no diagnóstico e tratamento de
                pacientes de todos idades, ao mesmo tempo em que enfatiza a
                medicina preventiva e a saúde e bem-estar de seus pacientes. A
                clínica apresenta equipamentos de última geração e pessoal
                treinado que otimizará o cuidado de cada paciente. Entendemos
                que existem muitos fatores que podem afetar a saúde, incluindo
                exercícios, dieta e hereditariedade.
              </p>
              <p>
              Estamos comprometidos em fornecer atendimento ao paciente da mais alta qualidade.
                Nossa dedicação à excelência, compaixão e inovação é
                enraizado em nossa devoção à arte e à ciência da cura, que
                apoia todos os aspectos da nossa missão.
              </p>
  
            </div>
            <div className="flex flex-col  sm:w-6/12 justify-center items-center">
              <article className="">
                <img
                  className=""
                  src={ImageOdonto3}
                  alt="odonto"
                  width="418"
                  height="245"
                />
                <div className="flex flex-col py-4 gap-y-4 bg-white justify-center items-center">
                  <p className="heading-6">
                    <a href="#" className="bebas-font-regular text-2xl">NOSSA MISSÃO</a>
                  </p>
                  <p className="mx-4">
                   Nosso objetivo é fornecer serviços comunitários compassivos e abrangentes
                    cuidados de saúde que superem as expectativas dos nossos clientes e
                    precisa.
                  </p>
                  <Button
                    variant="small"
                    title="VER MAIS"
                    onClick={() => alert("card")}
                    className={"w-40 bebas-font-regular self-center text-xl"}
                  >
                    <ButtonIcon icon={<IoIosArrowForward />} />
                  </Button>
                </div>
              </article>
            </div>
            <div className="flex flex-col sm:w-6/12 gap-y-6 justify-center items-center">
              <article className="thumb-flat thumb-flat-modern">
                <img
                  className="thumb-flat__image"
                  src={ImageOdonto4}
                  alt="odonto"
                  width="418"
                  height="245"
                />
                <div className="flex flex-col bg-white py-4 gap-y-4  justify-center items-center">
                  <p className="heading-6">
                    <a href="#" className="bebas-font-regular text-2xl">NOSSA VISÃO</a>
                  </p>
                  <p className="mx-4">
                    A visão da Cliníca Odontológica é ser os serviços médicos
                    fornecedor em que as pessoas podem confiar e confiar, independentemente de
                    seu orçamento.
                  </p>
                  <Button
                    variant="small"
                    title="VER MAIS"
                    onClick={() => alert("card")}
                    className={"w-40 bebas-font-regular self-center text-xl"}
                  >
                    <ButtonIcon icon={<IoIosArrowForward />} />
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
