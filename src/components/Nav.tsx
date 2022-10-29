import { useState } from "react";
import { t, setDefaultNamespace } from "i18next";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline/index.js";
import DropDown from './DropDown.jsx';

type NavProps = {
  location: string;
};

const Nav = ({ location, children }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  setDefaultNamespace("common")
  const navSelectedStyle =
    "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white";
  const navMobileSelectedStyle =
    "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white";
  const navDefaultStyle =
    "rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white";
  const navMobileDefaultStyle =
    "block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white";
  return (
    <Disclosure as="nav" className="bg-white-900">
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="/assets/encarnacion-services-logo.png"
                  alt="Encarnación Service SRL"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="/assets/encarnacion-services-logo.png"
                  alt="Encarnación Service SRL"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className={
                      location === "home"
                        ? navSelectedStyle
                        : navDefaultStyle
                    }
                  >
                    Home
                  </a>
                  <a
                    href="/about/"
                    className={
                      location === "about" ? navSelectedStyle : navDefaultStyle
                    }
                  >
                    Quiénes Somos
                  </a>
                  <a
                    href="/services/"
                    className={
                      location === "services"
                        ? navSelectedStyle
                        : navDefaultStyle
                    }
                  >
                    Servicios
                  </a>
                  <a
                    href="/contact/"
                    className={
                      location === "contact"
                        ? navSelectedStyle
                        : navDefaultStyle
                    }
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </div>
            {children}
            <div className="-mr-2 flex sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Disclosure.Button
              as="a"
              href="/"
              className={
                location === "home"
                  ? navMobileSelectedStyle
                  : navMobileDefaultStyle
              }
            >
              Home
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="/about/"
              className={
                location === "about"
                  ? navMobileSelectedStyle
                  : navMobileDefaultStyle
              }
            >
              Quiénes Somos
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="/services/"
              className={
                location === "services"
                  ? navMobileSelectedStyle
                  : navMobileDefaultStyle
              }
            >
              Servicios
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="/contact/"
              className={
                location === "contact"
                  ? navMobileSelectedStyle
                  : navMobileDefaultStyle
              }
            >
              Contacto
            </Disclosure.Button>
          </div>
        </Disclosure.Panel>
      </>
    </Disclosure>
  );
};
export default Nav;
