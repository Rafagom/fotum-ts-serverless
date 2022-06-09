import { ChatTeardropDots, WhatsappLogo } from "phosphor-react";

export function Widget() {
  return (
    <a
      href="https://wa.me/message/2KTISK2P7CG6E1"
      target="_blank"
      className="  fixed bottom-28 right-0 z-10 "
      rel="noreferrer"
    >
      <button>
        <div className="bg-green-500 rounded-l-3xl px-4 py-3 sm:px-5 sm:py-4 text-white items-center flex group absolute bottom-0 right-0">
          <WhatsappLogo className="w-6 h-6 sm:w-10 sm:h-10" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700">
            &nbsp;WhatsApp
          </span>
        </div>
      </button>
    </a>
  );
}
