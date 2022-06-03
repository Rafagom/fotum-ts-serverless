import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Widget } from "../src/components/Widget/Widget";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

function Services() {
  const left = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, x: -200 },
  };

  const scale = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const appear = {
    visible: { opacity: 1, scale: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const right = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, x: 200 },
  };

  const bottom = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: 50 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <>
      <Header />
      <section className="grid grid-cols-1 pt-4 lg:grid-cols-2 lg:grid-cols-2grid-rows-3">
        <div className="flex flex-col items-center justify-center gap-10 py-8 lg:py-0">
          <h2 className="text-3xl font-semibold md:text-4xl text-center">
            Geração <br /> Solar Fotovoltaica
          </h2>
          <ul className="flex flex-col gap-5 text-center text-xl md:text-2xl ">
            <li>
              <strong className=" font-semibold">&#x2713;</strong> Projeto
            </li>
            <li>
              <strong className=" font-semibold">&#x2713;</strong> Homologação
            </li>
            <li>
              <strong className=" font-semibold">&#x2713;</strong> Instalação
            </li>
            <li>
              <strong className=" font-semibold">&#x2713;</strong> Manutenção
            </li>
            <li>
              <strong className=" font-semibold">&#x2713;</strong> Ampliações
            </li>
            <li>
              <strong className=" font-semibold">&#x2713;</strong> Remanejamento
            </li>
          </ul>
        </div>

        <img
          className="lg:col-start-1 lg:col-end-2 w-full lg:row-start-1"
          src="/img1.webp"
          alt="Modulos"
        />

        <div className="flex flex-col items-center  justify-center gap-10 py-8 lg:py-0">
          <h2 className="text-3xl font-semibold md:text-4xl text-center">
            Instalações Elétricas
          </h2>
          <ul className="flex flex-col text-xl md:text-2xl gap-5 text-center">
            <li>
              <strong className=" font-semibold">&#x2713;</strong> Projetos e
              instalação
            </li>
            <li>
              <strong className=" font-semibold">&#x2713;</strong> Novas
              instalações e reformas
            </li>
            <li>
              <strong className=" font-semibold">&#x2713;</strong> Adequações
              normativas
            </li>
            <li>
              <strong className=" font-semibold">&#x2713;</strong> Inspeções e
              laudos
            </li>
          </ul>
        </div>

        <img
          src="/img2.webp"
          alt="Modulos"
          className="w-full lg:row-start-2 lg:col-start-2 lg:col-end-3 "
        />

        <div className="flex flex-col items-center  justify-center gap-10 py-8 lg:py-0">
          <h2 className="text-3xl font-semibold md:text-4xl text-center">
            Eficiência energética
          </h2>
          <ul className="flex flex-col text-xl md:text-2xl gap-5 text-center">
            <li>
              <strong className=" font-semibold">&#x2713;</strong> Análises de
              potenciais economias
            </li>
            <li>
              <strong className=" font-semibold">&#x2713;</strong> Medições e
              identificações de falhas
            </li>
          </ul>
        </div>
        <img
          className=" w-full lg:row-start-3 lg:col-start-1 lg:col-end-2"
          src="/img3.webp"
          alt="Modulos"
        />
      </section>
      <Footer />
      <Widget />
    </>
  );
}
export default Services;
