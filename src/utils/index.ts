import type { NavTranslations } from '../types';

export const getNavTranslations = (t: (key: string) => string) => <NavTranslations> ({
    home: t("nav.home"),
    about: t("nav.about-us"),
    services: t("nav.services"),
    contact: t("nav.contact"),
    press: t("nav.press"),
});
