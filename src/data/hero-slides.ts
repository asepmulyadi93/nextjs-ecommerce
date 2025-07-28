export interface HeroSlide {
  id: number;
  title: string;
  discount: string;
  image: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "iPhone 14 Series",
    discount: "Up to 10%",
    image: "/images/hero-banner-1.png",
  },
  {
    id: 2,
    title: "Samsung S23 Ultra",
    discount: "Up to 15%",
    image: "/images/hero-banner-1.png",
  },
  {
    id: 3,
    title: "MacBook Pro",
    discount: "Up to 20%",
    image: "/images/hero-banner-1.png",
  },
  {
    id: 4,
    title: "iPad Pro",
    discount: "Up to 12%",
    image: "/images/hero-banner-1.png",
  },
  {
    id: 5,
    title: "AirPods Pro",
    discount: "Up to 25%",
    image: "/images/hero-banner-1.png",
  },
];
