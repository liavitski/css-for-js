export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
} as const;

export const CATEGORIES = [
  { slug: 'bestsellers', label: 'Bestsellers' },
  { slug: 'lifestyle', label: 'Lifestyle' },
  { slug: 'running', label: 'Running' },
  { slug: 'basketball', label: 'Basketball' },
  { slug: 'training', label: 'Training' },
  {
    slug: 'skateboarding',
    label: 'Skateboarding',
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];
