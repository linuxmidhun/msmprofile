// import "../styles/globals.css";
// import { ThemeProvider } from "next-themes";

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider defaultTheme="light" attribute="class">
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

// export default MyApp;

import React, { FC } from 'react';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

interface MyAppProps {
  Component: FC;
  pageProps: any;
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;