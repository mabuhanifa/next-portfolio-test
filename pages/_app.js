import { ThemeProvider } from "next-theme";
import NextNProgress from 'nextjs-progressbar';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";
// const roboto = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-roboto",
// });

export default function App({ Component, pageProps }) {
  return (
    <main className="text-gray-700 dark:text-white dark:bg-gray-700 bg-gray-50 pt-5">
      {/* className={`${roboto.variable} font-roboto`} */}
      <ThemeProvider enableSystem={true} attribute="class">
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </main>
  );
}
