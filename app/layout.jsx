import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import CustomCursor from "../components/CustomCursor";

import { Manrope, Silkscreen, Plus_Jakarta_Sans, Roboto, Cardo } from 'next/font/google'

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
})

export const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-silkscreen',
})

// export const plus_jakarta_sans = Plus_Jakarta_Sans({
//   subsets: ['latin'],
//   weight: ['200', '300', '400', '500', '600', '700', '800'],
//   variable: '--font-plus-jakarta-sans',
// })

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto',
})

export const cardo = Cardo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cardo',
})

export const metadata = {
 default: "ninety-two",
  template: "%s * ninety-two",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
       <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
<body
  className={`${manrope.variable} ${silkscreen.variable} ${roboto.variable} ${cardo.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        <CustomCursor />
        {children}
      </body>
    </html>
    </ViewTransitions>
  );
}
