import type { CategorySlug } from '@/constants';

export type Category = {
  slug: string;
  name: string;
  imageSrc: string;
  price: number;
  salePrice: number | null;
  releaseDate: number;
  numOfColors: number;
  categories: CategorySlug[];
};

// Simulated database request
export async function getShoesForCategory(category: CategorySlug) {
  await delay(2000);

  return SHOES.filter((shoe) => shoe.categories.includes(category));
}

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const SHOES: Category[] = [
  {
    slug: 'tech-challenge',
    name: 'NikeCourt Tech Challenge 20',
    imageSrc: '/assets/tech-challenge.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
    numOfColors: 2,
    categories: ['bestsellers', 'lifestyle', 'training'],
  },
  {
    slug: 'metcon-5',
    name: 'Nike Metcon 5 AMP',
    imageSrc: '/assets/metcon-5.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
    numOfColors: 1,
    categories: ['training', 'bestsellers'],
  },
  {
    slug: 'phantom',
    name: 'Nike Phantom Vision',
    imageSrc: '/assets/phantom.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 4,
    numOfColors: 4,
    categories: ['lifestyle', 'training'],
  },
  {
    slug: 'pegasus',
    name: 'Nike Air Zoom Pegasus',
    imageSrc: '/assets/pegasus.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 16,
    numOfColors: 1,
    categories: ['running', 'bestsellers', 'training'],
  },
  {
    slug: 'joyride',
    name: 'Nike Joyride Dual Run',
    imageSrc: '/assets/joyride.jpg',
    price: 17000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 40,
    numOfColors: 2,
    categories: ['running', 'lifestyle'],
  },
  {
    slug: 'legend-academy',
    name: 'Nike Tiempo Legend 8',
    imageSrc: '/assets/legend-academy.jpg',
    price: 16500,
    salePrice: 12500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 50,
    numOfColors: 8,
    categories: ['bestsellers', 'training', 'lifestyle'],
  },
  {
    slug: 'react-infinity',
    name: 'Nike React Infinity Pro',
    imageSrc: '/assets/react-infinity.jpg',
    price: 16000,
    salePrice: 14500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 75,
    numOfColors: 1,
    categories: ['running', 'training'],
  },
  {
    slug: 'phantom-flyknit',
    name: 'Nike React Phantom Run Flyknit 2',
    imageSrc: '/assets/phantom-flyknit.jpg',
    price: 18500,
    salePrice: 16000,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 100,
    numOfColors: 4,
    categories: ['running', 'lifestyle', 'bestsellers'],
  },
  {
    slug: 'lebron',
    name: 'LeBron 17',
    imageSrc: '/assets/lebron.jpg',
    price: 26000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 120,
    numOfColors: 1,
    categories: ['basketball', 'bestsellers', 'lifestyle'],
  },
];

export default SHOES;
