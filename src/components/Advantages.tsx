import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function Advantages() {
  const left = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, x: -200 },
  };

  const scale = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const appear = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const right = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, x: 200 },
  };

  const bottom = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: -200 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <section className="flex flex-col  gap-2  items-center justify-center">
      <motion.div
        className="box "
        ref={ref}
        variants={appear}
        initial="hidden"
        animate={control}
      >
        <h1 className="   text-4xl  px-1 py-10 font-bold text-[#00324b] ">
          Aproveite a <br className="sm:hidden" />{" "}
          <strong className="text-[#ffaa00]"> luz do sol,</strong>
          <br />
          gere sua própria
          <br className="sm:hidden" />
          <strong className="text-[#ffaa00]"> energia!</strong>
        </h1>
      </motion.div>
      <div className="flex items-center justify-center bg-[url('/img-bottom.jpeg')] bg-cover bg-no-repeat bg-top w-full px-4 py-24">
        <ul className="flex flex-col text-2xl  px-2 py-4 font-bold text-[#ffaa00]  text-center gap-5 bg-[rgb(257,257,257,0.7)] rounded-md sm:px-6 sm:py-6   md:text-5xl md:px-6 md:py-8">
          <motion.div
            className="box flex flex-col text-center gap-5"
            ref={ref}
            variants={left}
            initial="hidden"
            animate={control}
          >
            <li className="font-semibold text-[#00324b] text-xl md:text-3xl ">
              - Até 95% de economia na conta de energia
            </li>
            <li className="font-semibold text-[#00324b] text-xl md:text-3xl">
              - Livre de ajustes tarifários
            </li>
            <li className="font-semibold text-[#00324b] text-xl md:text-3xl">
              - Investimento de baixo risco
            </li>
            <li className="font-semibold text-[#00324b] text-xl md:text-3xl">
              - Valorização do imóvel e da marca
            </li>
            <li className="font-semibold text-[#00324b] text-xl md:text-3xl">
              - Compromisso socioambiental
            </li>
            <li className="font-semibold text-[#00324b] text-xl md:text-3xl">
              - Baixa manutenção
            </li>
          </motion.div>
        </ul>
      </div>

      {/* <Image
        width={800}
        height={600}
        src="/img-bottom.jpeg"
        alt="Modulos Fotovoltaicos"
      /> */}
    </section>
  );
}
