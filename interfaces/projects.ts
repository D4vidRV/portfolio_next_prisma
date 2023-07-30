export interface Feature {
  description: string;
  imageUrl: string;
}

export interface IProject {
  title: string;
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;
  features: Feature[];
}
