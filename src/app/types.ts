export type Service = {
  name: string;
  imagePath: string;
  imageAlt: string;
  briefDescription: string;
  description: string;
};

export const services: Service[] = [
  {
    name: "Kitchens",
    imagePath: "/kitchen2.png",
    imageAlt: "kitchens",
    briefDescription: "Kitchens",
    description: "Kitchens",
  },
  {
    name: "Bathrooms",
    imagePath: "/bathroom.png",
    imageAlt: "bathrooms",
    briefDescription: "Bathrooms",
    description: "Bathrooms",
  },
  {
    name: "Basements",
    imagePath: "/basement.png",
    imageAlt: "basements",
    briefDescription: "Basements",
    description: "Basements",
  },
  {
    name: "Flooring",
    imagePath: "/flooring.png",
    imageAlt: "flooring",
    briefDescription: "Flooring",
    description: "Flooring",
  },
  {
    name: "Decks & Fences",
    imagePath: "/decks.png",
    imageAlt: "decks",
    briefDescription: "Decks & Fences",
    description: "Decks & Fences",
  },
];
