import { Karla, Inter } from '@next/font/google';

const karla = Karla({ subsets: 'latin' });
const inter = Inter({ subsets: 'latin' });

export default {
  flexCenter: 'flex justify-center items-center',
  fonts: {
    karla: karla.className,
    inter: inter.className,
  },
  unchecked: 'border-[#4D5B9E]',
  checked:
    'bg-[#D6DBF5] border-[hsl(231,42%,50%)] dark:bg-[hsl(231,50%,50%)] dark:text-[hsla(231,61%,85%)]',
  correctCheck: 'bg-[hsl(133,46%,71%)] dark:bg-[hsl(133,46%,65%)] dark:text-cyan-900 dark:border-[hsl(133,46%,65%)] dark:shadow-sm dark:shadow-green-700',
  wrongCheck: 'bg-[hsl(0,81%,85%)] dark:bg-[hsl(0,81%,55%)] dark:text-blue-200 dark:border-[hsl(0,81%,60%)]',
};
