import { Envelope, InstagramLogo, Phone, WhatsappLogo } from "phosphor-react";

export function Footer() {
  return (
    // <footer className="grid grid-cols-[8fr,1fr] mb-2">
    <footer className="flex flex-col w-full items-center gap-6  bg-[#f2f2f2] pt-4 pb-2">
      <div className="flex w-full items-center justify-center gap-6  bg-[#f2f2f2] pt-4 pb-2">
        <a
          className="flex items-center gap-2 font-medium"
          href="mailto:contato@fotumengenharia.com.br"
          target="_blank"
          rel="noreferrer"
        >
          <Envelope size={32} />
          <p className="hidden lg:flex"> contato@fotumengenharia.com.br</p>
        </a>
        <a
          href="https://api.whatsapp.com/message/2KTISK2P7CG6E1?autoload=1&app_absent=0"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 font-medium"
        >
          <WhatsappLogo size={32} />
          <p className="hidden lg:flex">(48) 98411-0903</p>
        </a>

        <a
          className="flex items-center gap-2 font-medium"
          href="tel:7197001211 "
        >
          <Phone size={32} />
          <p className="hidden lg:flex">(48) 98411-0903</p>
        </a>

        <a
          href="https://www.instagram.com/fotumengenharia/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 font-medium"
        >
          <InstagramLogo size={32} />
          <p className="hidden lg:flex">/fotumengenharia</p>
        </a>
      </div>

      <p className="text-sm">
        ©2022 por Fótum Engenharia - Santa Catarina, Brasil
      </p>
    </footer>
  );
}
