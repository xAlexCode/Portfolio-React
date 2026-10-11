export type Project = {
  id: number,
  title: string,
  description: string,
  image: string,
  tags: string[],
  liveLink?: string, // Frågetecknet gör att det inte måste finnas med
  repoLink?: string
};

export type Skill = {
    id: number,
    name: string,
    image: string
};

export type FormData = {
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string
};

export type Errors = {  
    name?: string,
    email?: string,
    phone?: string,
    subject?: string,
    message?: string
};