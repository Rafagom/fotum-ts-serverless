import { InstagramLogo, WhatsappLogo } from "phosphor-react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export function Header() {
  const navigation = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/services" },
    { name: "Contato", href: "/contact" },
  ];
  return (
    <section>
      <Popover>
        <div className="relative pt-6 px-4 sm:px-10 lg:px-16 sm:pt-0">
          <nav
            className="relative flex items-center justify-between sm:h-14 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href={"/"}>
                  <a>
                    <Image
                      src="/logo.png"
                      alt="Logo Fótum Engenharia"
                      width={100}
                      height={40}
                    />
                  </a>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ffaa00]">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:ml-10 md:pr-0 md:space-x-8 md:items-center md:justify-end md:w-full">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="font-medium hover:text-gray-900">{item.name}</a>
                </Link>
              ))}
              <div className="flex items-center gap-6">
                <a
                  href="https://api.whatsapp.com/message/2KTISK2P7CG6E1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsappLogo size={32} />
                </a>
                <a
                  href="https://www.instagram.com/fotumengenharia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogo size={32} />
                </a>
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Image
                    src="/logo.png"
                    alt="Logo Fótum Engenharia"
                    width={100}
                    height={40}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ffaa00]">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="flex flex-col px-8 pt-2 pb-2 space-y-1 items-center gap-2 ">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} replace>
                    <a className=" px-24 py-4 rounded-md text-base font-bold  hover:text-gray-900 hover:bg-yellow-500">
                      {item.name}
                    </a>
                  </Link>
                ))}
                <a
                  href="https://www.instagram.com/fotumengenharia/"
                  target="_blank"
                  rel="noreferrer"
                  className=" px-24 py-4 rounded-md text-base font-bold  hover:text-gray-900 hover:bg-yellow-500"
                >
                  Intagram
                </a>
                <a
                  href="https://api.whatsapp.com/message/2KTISK2P7CG6E1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className=" px-24 py-4 rounded-md text-base font-bold  hover:text-gray-900 hover:bg-yellow-500"
                >
                  Whatsapp
                </a>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      {/* <div className="bg-white w-full h-16 z-10">
        <header className="flex h-16  justify-between max-w-[80vw] items-center mx-auto mb-16 ">
          <nav className="flex items-center gap-6">
            <ul className="flex items-center gap-4 font-semibold">
              <li>
                <Link href="/">
                  <a>Início</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a>Serviços</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contato</a>
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-2">
              <a
                href="https://api.whatsapp.com/message/2KTISK2P7CG6E1?autoload=1&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsappLogo size={32} />
              </a>
              <a
                href="https://www.instagram.com/fotumengenharia/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <InstagramLogo size={32} />{" "}
              </a>
            </div>
          </nav>
        </header>
      </div>
      <div className="h-16"></div> */}
    </section>
  );
}
