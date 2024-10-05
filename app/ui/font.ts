import {Inter, Lusitana} from 'next/font/google';

import localFont from 'next/font/local';


export const nerdFont = localFont({
    src: '../../public/fonts/nerdfont/GohuFont11NerdFont-Regular.ttf',
    display: 'swap'
})

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
})

export const inter = Inter({
    subsets: ['latin']
})