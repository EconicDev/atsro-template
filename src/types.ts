export interface Project {
  title: string;
  client: string;
  description: string;
  publishDate: string;
  tags: string[];
  img: string;
}

export type NavProps = {
  location: string
  children: JSX.Element;
};