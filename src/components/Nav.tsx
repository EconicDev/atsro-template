import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, LanguageIcon, XMarkIcon } from "@heroicons/react/24/outline/index.js";
import type { NavProps } from '../types';


const Nav = ({ location, translations, language, children }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageToggle, setLanguageToggle] = useState(false);
  
  const navSelectedStyle =
    "rounded-sm bg-fulvous-600 px-3 py-2 text-sm font-medium text-white";
  const navMobileSelectedStyle =
    "block rounded-sm bg-fulvous-600 px-3 py-2 text-base font-medium text-white";
  const navDefaultStyle =
    "rounded-sm px-3 py-2 text-sm font-medium text-gray-800 hover:bg-fulvous-200 hover:text-white transition duration-300 ease-in-out";
  const navMobileDefaultStyle =
    "block rounded-sm px-3 py-2 text-base font-medium text-gray-800 hover:fulvous-200 hover:text-white";
  const languagePrefix = language === 'es' ? '' : "/" + language;

  return (
    <Disclosure as="nav" className="bg-white">
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <a href={"/astro-template" + languagePrefix + "/"}>
                <img
                  className="block h-10 w-auto lg:hidden"
                  src="/astro-template/logo/Encarnacion_Service_logo_svg_fc.svg"
                  alt="Encarnación Service SRL"
                />
                <img
                  className="hidden h-12 w-auto lg:block"
                  src="/astro-template/logo/Encarnacion_Service_logo_svg_fc.svg"
                  alt="Encarnación Service SRL"
                />
                </a>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href={"/astro-template" + languagePrefix + "/"}
                    className={
                      location === "home"
                        ? navSelectedStyle
                        : navDefaultStyle
                    }
                  >
                    {translations.home}
                  </a>
                  <a
                    href={"/astro-template" + languagePrefix + "/about/"}
                    className={
                      location === "about" ? navSelectedStyle : navDefaultStyle
                    }
                  >
                    {translations.about}
                  </a>
                  <a
                    href={"/astro-template" + languagePrefix + "/services/"}
                    className={
                      location === "services"
                        ? navSelectedStyle
                        : navDefaultStyle
                    }
                  >
                    {translations.services}
                  </a>
                  <a
                    href={"/astro-template" + languagePrefix + "/contact/"}
                    className={
                      location === "contact"
                        ? navSelectedStyle
                        : navDefaultStyle
                    }
                  >
                    {translations.contact}
                  </a>
                </div>
              </div>
            </div>
            {languageToggle ? children 
            : (
              <button
                onClick={() => setLanguageToggle(!languageToggle)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">language</span>
                <LanguageIcon className="block h-6 w-6" aria-hidden="true" />
              </button>
            )}
            <div className="-mr-2 flex sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-fulvous-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
              href={"/astro-template" + languagePrefix + "/"}
              className={
                location === "home"
                  ? navMobileSelectedStyle
                  : navMobileDefaultStyle
              }
            >
              {translations.home}
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href={"/astro-template" + languagePrefix + "/about/"}
              className={
                location === "about"
                  ? navMobileSelectedStyle
                  : navMobileDefaultStyle
              }
            >
              {translations.about}
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href={"/astro-template" + languagePrefix + "/services/"}
              className={
                location === "services"
                  ? navMobileSelectedStyle
                  : navMobileDefaultStyle
              }
            >
              {translations.services}
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href={"/astro-template" + languagePrefix + "/contact/"}
              className={
                location === "contact"
                  ? navMobileSelectedStyle
                  : navMobileDefaultStyle
              }
            >
              {translations.contact}
            </Disclosure.Button>
          </div>
        </Disclosure.Panel>
      </>
    </Disclosure>
  );
};
export default Nav;
