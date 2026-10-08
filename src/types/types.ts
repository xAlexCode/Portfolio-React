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