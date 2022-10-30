export interface Project {
  title: string;
  client: string;
  description: string;
  publishDate: string;
  tags: string[];
  img: string;
}

export type NavTranslations = {
  home: string;
  about: string;
  services: string;
  contact: string;
  press: string;
}

export type NavProps = {
  location: string
  children: JSX.Element;
  translations: NavTranslations,
  language: string;
};