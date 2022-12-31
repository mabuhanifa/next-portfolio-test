import { Open_Sans } from "@next/font/google";
import { ThemeProvider } from "next-theme";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";

const roboto = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }) {
  return (
    <main >
      {/* className={`${roboto.variable} font-roboto`} */}
      <ThemeProvider enableSystem={true} attribute="class">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </main>
  );
}
