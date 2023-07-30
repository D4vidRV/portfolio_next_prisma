export interface Feature {
  description: string;
  description_es: string;
  imageUrl: string;
}

export interface IProject {
  title: string;
  overview: string;
  overview_es: string;
  link: string;
  _id: string;
  imageUrl: string;
  features: Feature[];
}
