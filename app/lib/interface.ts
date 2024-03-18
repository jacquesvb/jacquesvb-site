export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  tags: string[];
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
}

export interface aboutMe {
  name: string;
  jobbieDescription: string;
  linkedin: string;
  github: string;
  resume: string;
  jobbieImage: any;
}