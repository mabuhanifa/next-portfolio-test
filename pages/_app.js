import { ThemeProvider } from "next-theme";
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
    <main className="text-gray-700 dark:text-white dark:bg-gray-700 bg-gray-100 py-5 px-10 sm:px-20">
      {/* className={`${roboto.variable} font-roboto`} */}
      <ThemeProvider enableSystem={true} attribute="class">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </main>
  );
}
