import { Poppins, Lusitana } from 'next/font/google';

export const baseFont = Poppins({
    weight: ['400'],
    subsets: ['latin'],
    // Add fallback fonts
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});