import { Footer } from "../src/components/Footer";
import { ContactForm } from "../src/components/Form";
import { Header } from "../src/components/Header";
import { Widget } from "../src/components/Widget/Widget";
import Head from "next/head";

function Contact() {
  return (
    <div className="">
      <Head>
        <title>Fótum Engenharia | Contato</title>
      </Head>
      <Header />
      <ContactForm />

      <Footer />

      <Widget />
    </div>
  );
}
export default Contact;
