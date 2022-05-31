import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  useFormik,
  FormikProvider,
  Form,
  useField,
  Field,
  validateYupSchema,
} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Loading } from "./Loading";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const TextInputLiveFeedback = ({ label, helpText, ...props }: any) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`form-control ${
        showFeedback ? (meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div className="flex items-center space-between gap-2 ">
        <label htmlFor={props.id}>{label}</label>{" "}
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-sm text-red-600"
          >
            {meta.error ? meta.error : <p className="text-green-600">✓</p>}
          </div>
        ) : null}
      </div>
      <input
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
      <div className="text-xs" id={`${props.id}-help`} tabIndex={-1}>
        {helpText}
      </div>
    </div>
  );
};

export function ContactForm() {
  const top = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: -100 },
  };

  const scale = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const [isSubmit, setIsSubmit] = useState(false);

  async function send(campos: any) {
    let email = campos.email;
    let subject = campos.subject;
    let cost = campos.cost;
    let message = campos.message;
    let username = campos.username;
    axios.post("/api/sendMail", { username, email, subject, cost, message });
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      subject: "",
      cost: "",
      message: "",
      // anexo: null,
    },
    onSubmit: async (values) => {
      setIsSubmit(true);
      await sleep(500);
      send(values);
      setIsSubmit(false);
    },

    validationSchema: Yup.object({
      username: Yup.string()
        // .min(8, "Must be at least 8 characters")
        // .max(20, "Must be less  than 20 characters")
        .required("É necessario preencher o seu nome")
        .matches(/^[a-zA-Z0-9\s]+$/, "Não pode conter caracters especiais"),

      email: Yup.string()
        // .min(8, "Must be at least 8 characters")
        // .max(20, "Must be less  than 20 characters")
        .required("É necessario preencher o seu Email")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Email inválido"),
    }),
  });

  return (
    <section className="flex flex-col justify-center items-center w-full py-10 gap-10">
      <motion.div
        className="box"
        ref={ref}
        variants={top}
        initial="hidden"
        animate={control}
      >
        <h1 className="text-4xl font-bold text-[#ffaa00] text-center w-[13ch] md:w-full">
          Se interessou? Fale conosco!
        </h1>{" "}
      </motion.div>
      <FormikProvider value={formik}>
        <motion.div
          className="box"
          ref={ref}
          variants={scale}
          initial="hidden"
          animate={control}
        >
          <Form>
            <TextInputLiveFeedback
              className="min-w-[304px] w-[60vw] h-10  p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3"
              label="Nome *"
              id="username"
              name="username"
              // helpText="Must be 8-20 characters and cannot contain special characters."
              type="text"
              placeholder="Insira seu nome"
            />
            <TextInputLiveFeedback
              className="min-w-[304px] w-[60vw] h-10  p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3"
              label="Email *"
              id="email"
              name="email"
              // helpText="Must be 8-20 characters and cannot contain special characters."
              type="email"
              placeholder="Insira seu Email"
            />
            <TextInputLiveFeedback
              className="min-w-[304px] w-[60vw] h-10  p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3"
              label="Assunto"
              id="subject"
              name="subject"
              // helpText="Must be 8-20 characters and cannot contain special characters."
              type="text"
              placeholder="Insira o assunto"
            />
            <TextInputLiveFeedback
              className="min-w-[304px] w-[60vw] h-10  p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3"
              label="Valor médio da conta de energia"
              id="cost"
              name="cost"
              // helpText="Must be 8-20 characters and cannot contain special characters."
              type="text"
              placeholder="Insira o valor em Reais (R$) ou em energia (KWh)"
            />
            <div className="flex flex-col">
              <label htmlFor="message">Mensagem</label>

              <Field
                className="min-w-[304px] w-[60vw] min-h-[160px] h-full p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent"
                id="message"
                name="message"
                as="textarea"
                placeholder="Digite sua mensagem aqui"
              />
            </div>

            <div className="flex flex-col w-full md:items-end">
              <button
                className="flex rounded bg-[#00324b] text-[#ffaa00] font-semibold text-lg  px-5 py-2  mt-5 justify-center hover:bg-[#174d68] transition-colors disabled:opacity-50 disabled:hover:bg-[#00324b]"
                type="submit"
              >
                {isSubmit ? <Loading /> : "Enviar"}
              </button>
            </div>
          </Form>
        </motion.div>
      </FormikProvider>
    </section>
  );
}
