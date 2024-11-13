import "../../App.css";
import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import ImageOdonto1 from "../../assets/images/Odontopediatria.png";
import ImageOdonto2 from "../../assets/images/ortodontia.png";
import ImageOdonto3 from "../../assets/images/profissionais.png";
import ImageOdonto4 from "../../assets/images/implantes.png";
import ImageOdonto5 from "../../assets/images//bucal2.png";
import ImageOdonto6 from "../../assets/images/proteses.png";
import ServiceCirurgy from "../../assets/icons-128/cirurgia.png";
import ServiceOftal from "../../assets/icons-128/service-oftal.png";
import ServiceOdontopediatria from "../../assets/icons-128/service-odontopediatria.png";
import ServiceClareamento from '../../assets/icons-128/service-clareamento.png'
import ServiceCaries from '../../assets/icons-128/service-caries.png'
import ServiceImplantes from '../../assets/icons-128/service-implantes.png'
import Header from "../../components/Header/Header";
import { FormContact } from "../../components/ContactForm/ContactForm";
import Button from "../../components/Button/button";
import ButtonIcon from "../../components/Button/ButtonIcon/buttonIcon";
import { IoIosArrowForward } from "react-icons/io";
import Text from "../../components/Text/text";
import Box from "../../components/Box/box";

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

const OurServices = [
  {
    id: 1,
    image: ServiceCirurgy,
    title: "CIRURGIA GERAL",
    descrition:
      "Nossos cirurgiões gerais se concentram em uma variedade de problemas que podem ser tratados com cirurgia.",
  },
  {
    id: 2,
    image: ServiceOftal,
    title: "PROCEDIMENTOS ODONTOLÓGICOS",
    descrition:
      "Os odontologistas da Clinica Odontologica fornecem procedimentos de saúde ocular de alta qualidade aos nossos pacientes",
  },
  {
    id: 3,
    image: ServiceOdontopediatria,
    title: "ODONTOPEDIATRIA",
    descrition:
      "Cuidados dentários para crianças, incluindo prevenção de cáries, orientação sobre higiene bucal e aplicação de flúor.",
  },
  {
    id: 4,
    image: ServiceClareamento,
    title: "CLAREAMENTO DENTAL",
    descrition:
      "Procedimento estético para clarear os dentes, podendo ser realizado no consultório ou com produtos de uso doméstico.",
  },
  {
    id: 5,
    image: ServiceCaries,
    title: "TRATAMENTO DE CARIES",
    descrition:
      "Reparação de dentes afetados por cáries, utilizando materiais como resina composta.",
  },
  {
    id: 6,
    image: ServiceImplantes,
    title: "IMPLANTES DENTÁRIOS",
    descrition:
      "Colocação de pinos de titânio no osso maxilar para substituir dentes perdidos.",
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

      {/**SECTION ABOUT */}
      <section
        className="flex w-full bg-slate-100 px-8 py-4 sm:py-14"
        id="about"
      >
        <Box size="w-full" direction="row" className="shadow-none ">
          <Box
            size="w-full"
            direction="col"
            className="gap-x-4  shadow-none gap-y-8 sm:flex-row"
          >
            <Box
              size="w-full"
              direction="col"
              className="shadow-none  sm:w-9/12 mb-8"
            >
              <h4 className="bebas-font-medium text-3xl text-start pb-2 mb-4 border-b-2 border-sky-400 inline-block tracking-widest">
                SOBRE NÓS
              </h4>
              <p className="text-start pr-4">
                A ClinicFlow se concentra no diagnóstico e tratamento de
                pacientes de todos idades, ao mesmo tempo em que enfatiza a
                medicina preventiva e a saúde e bem-estar de seus pacientes. A
                clínica apresenta equipamentos de última geração e pessoal
                treinado que otimizará o cuidado de cada paciente. Entendemos
                que existem muitos fatores que podem afetar a saúde, incluindo
                exercícios, dieta e hereditariedade.
              </p>
              <p className="text-start pr-4">
                Estamos comprometidos em fornecer atendimento ao paciente da
                mais alta qualidade. Nossa dedicação à excelência, compaixão e
                inovação é enraizado em nossa devoção à arte e à ciência da
                cura, que apoia todos os aspectos da nossa missão.
              </p>
            </Box>
            <Box
              size="w-full"
              direction="col"
              className="sm:w-6/12 py-0 justify-center items-center"
            >
              <article>
                <img src={ImageOdonto3} alt="odonto" width="418" height="245" />
                <Box
                  size="w-full"
                  direction="col"
                  className="py-4 gap-y-4 bg-white justify-center items-center"
                >
                  <p>
                    <a href="#" className="bebas-font-regular text-2xl">
                      NOSSA MISSÃO
                    </a>
                  </p>
                  <p className="mx-4">
                    Nosso objetivo é fornecer serviços comunitários compassivos
                    e abrangentes cuidados de saúde que superem as expectativas
                    dos nossos clientes e precisa.
                  </p>
                  <Button
                    variant="small"
                    title="VER MAIS"
                    onClick={() => alert("card")}
                    className={"w-40 bebas-font-regular self-center text-xl"}
                  >
                    <ButtonIcon icon={<IoIosArrowForward />} />
                  </Button>
                </Box>
              </article>
            </Box>
            <Box
              size="w-full"
              direction="col"
              className="sm:w-6/12 py-0 justify-center items-center"
            >
              <article>
                <img src={ImageOdonto4} alt="odonto" width="418" height="245" />
                <Box
                  size="w-full"
                  direction="col"
                  className="bg-white py-4 gap-y-4  justify-center items-center"
                >
                  <p>
                    <a href="#" className="bebas-font-regular text-2xl">
                      NOSSA VISÃO
                    </a>
                  </p>
                  <p className="mx-4">
                    A visão da Cliníca Odontológica é ser os serviços médicos
                    fornecedor em que as pessoas podem confiar e confiar,
                    independentemente de seu orçamento.
                  </p>
                  <Button
                    variant="small"
                    title="VER MAIS"
                    onClick={() => alert("card")}
                    className={"w-40 bebas-font-regular self-center text-xl"}
                  >
                    <ButtonIcon icon={<IoIosArrowForward />} />
                  </Button>
                </Box>
              </article>
            </Box>
          </Box>
        </Box>
      </section>

      {/** MERITE N°1 */}
      <Box
        size="w-full"
        direction="col"
        className="items-center w-full px-6 py-12 rounded-none shadow-none bg-stone-900
      sm:flex-row sm:px-20
      "
      >
        <Box
          size="w-full"
          direction="col"
          className=" self-start gap-y-4 shadow-none"
        >
          <Text
            size="big"
            text=" Cliníca Odontologica é seu provedor de serviços médicos nº 1"
            className="bebas-font-regular text-start"
          />
          <Text
            size="small"
            text="Em nossa clínica, você pode obter uma gama completa de serviços de saúde para você e sua família."
            className=" tracking-wider text-start"
          />
        </Box>
        <Button
          title="Veja mais"
          variant="default"
          onClick={() => alert("VER MAIS")}
          className="bebas-font-regular text-xl self-start sm:self-center"
        >
          <ButtonIcon icon={<IoIosArrowForward />} />
        </Button>
      </Box>

      <Box
        size="w-full"
        direction="col"
        className="px-10 my-6 gap-y-8 bg-transparent items-center justify-center shadow-none"
      >
        <h4 className="bebas-font-medium pt-4 text-3xl text-start pb-2 mb-4 border-b-2 border-sky-400 inline-block tracking-widest">
          NOSSOS SERVIÇOS
        </h4>
        <p className="text-center px-2 sm:px-44">
          Nossos pacientes têm acesso a uma ampla gama de serviços, tanto no
          local quanto fora do local, por meio de parcerias que a Clínica
          estabelece. Além de oferecer ótimos cuidados de saúde, nossa equipe
          também oferece diagnósticos de alta qualidade utilizando equipamentos
          médicos de última geração. Fique à vontade para saber mais sobre
          nossos serviços abaixo.
        </p>

        <Box
          size="w-full"
          className="flex-col flex-wrap shadow-none gap-4 gap-y-8 justify-center items-center sm:flex-row"
        >
          {OurServices &&
            OurServices.map(({ id, title, descrition, image }) => {
              return (
                <Box
                key={id}
                  direction="col"
                  className="group w-full sm:w-3/12 px-6 gap-y-3 justify-center items-center cursor-pointer"
                >
                  <div className="rounded-full p-6 bg-sky-500 group-hover:bg-black transition duration-500">
                     <img
                    src={image}
                    width={70}
                    height={70}
                    alt="cirgugia geral"
                  />
                  </div>
                 
                  <h1 className="bebas-font-regular text-2xl">
                    {title}
                  </h1>
                  <p className="line-clamp-3">
                    {descrition}
                  </p>
                </Box>
              );
            })}
        </Box>
      </Box>
    </div>
  );
};
export default Home;
