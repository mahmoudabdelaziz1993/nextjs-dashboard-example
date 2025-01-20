import { Poppins, Lusitana } from 'next/font/google';

export const baseFont = Poppins({
    weight: ['400'],
    subsets: ['latin']
});
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});