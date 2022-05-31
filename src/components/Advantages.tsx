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
    <section className="flex flex-col justify-center pt-10 gap-10">
      <ul className="flex flex-col text-2xl  px-2 font-bold text-[#ffaa00]  text-center gap-5 md:text-5xl">
        <motion.div
          className="box "
          ref={ref}
          variants={appear}
          initial="hidden"
          animate={control}
        >
          <p className="mb-5">
            Aproveite a luz do sol e <br /> gere sua própria energia!
          </p>
        </motion.div>

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

      <Image
        width={800}
        height={600}
        src="/img-bottom.jpeg"
        alt="Modulos Fotovoltaicos"
      />
    </section>
  );
}
