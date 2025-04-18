export type ImagePair = [string, string];

export type Service = {
  name: string;
  mainImage: string;
  imageAlt: string;
  briefDescription: string;
  description: string;
  imagePairs?: ImagePair[];
  images?: string[];
};

export const services: Service[] = [
  {
    name: "Kitchens",
    mainImage: "/kitchens/kitchen2-after.png",
    imageAlt: "kitchens",
    briefDescription: "Kitchens",
    description:
      "We create stunning, functional kitchens tailored to your lifestyle. Whether you're dreaming of a modern chef’s paradise or a cozy family hub, our team delivers custom layouts, premium finishes, and flawless craftsmanship. From concept to completion, we make your kitchen the true heart of your home.",
    imagePairs: [
      ["/kitchens/kitchen1-before.png", "/kitchens/kitchen1-after.png"],
      ["/kitchens/kitchen2-before.png", "/kitchens/kitchen2-after.png"],
      ["/kitchens/kitchen3-before.png", "/kitchens/kitchen3-after.png"],
    ],
    images: ["/kitchens/kitchen4.png"],
  },
  {
    name: "Bathrooms",
    mainImage: "/bathrooms/bathroom6.png",
    imageAlt: "bathrooms",
    briefDescription: "Bathrooms",
    description:
      "We specialize in transforming bathrooms into relaxing, functional retreats. Whether it's a sleek ensuite, a spa-inspired upgrade, or a full remodel, our team delivers thoughtful design, quality materials, and expert craftsmanship. Let us bring your vision to life—style, comfort, and durability in every detail.",
    imagePairs: [
      ["/bathrooms/bathroom1-before.png", "/bathrooms/bathroom1-after.png"],
      ["/bathrooms/bathroom2-before.png", "/bathrooms/bathroom2-after.png"],
    ],
    images: [
      "/bathrooms/bathroom3.png",
      "/bathrooms/bathroom4.png",
      "/bathrooms/bathroom5.png",
      "/bathrooms/bathroom7.png",
      "/bathrooms/bathroom8.png",
    ],
  },
  {
    name: "Basements",
    mainImage: "/basements/basement2.png",
    imageAlt: "basements",
    briefDescription: "Basements",
    description:
      "Unlock the full potential of your home with a beautifully finished basement. Whether you're creating a cozy family room, home office, gym, or income suite, we deliver smart designs and quality construction tailored to your goals. From framing to final touches, our team ensures your basement is functional, stylish, and built to last.",
    imagePairs: [
      ["/basements/basement1-before.png", "/basements/basement1-after.png"],
    ],
    images: ["/basements/basement2.png"],
  },
  {
    name: "Flooring",
    mainImage: "/flooring/flooring1.png",
    imageAlt: "flooring",
    briefDescription: "Flooring",
    description:
      "Upgrade your space with expertly installed flooring that combines style, durability, and comfort. Whether you prefer hardwood, vinyl, laminate, or tile, we offer a wide range of high-quality options to suit your taste and needs. Our professional team ensures precise installation and a seamless finish that transforms any room from the ground up.",
    images: [
      "/flooring/flooring1.png",
      "/flooring/flooring2.png",
      "/flooring/flooring3.png",
      "/flooring/flooring4.png",
    ],
  },
  {
    name: "Decks & Fences",
    mainImage: "/decks/deck1.png",
    imageAlt: "decks",
    briefDescription: "Decks & Fences",
    description:
      "Enhance your outdoor living with custom-built decks and fences that offer both beauty and durability. Whether you're creating a space to entertain or looking for added privacy and security, our team delivers expert craftsmanship and quality materials tailored to your style and needs. Built tough, built right—every time.",
    images: ["/decks/deck1.png", "/decks/deck2.png", "/decks/deck3.png"],
  },
];
