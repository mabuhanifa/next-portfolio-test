import { ThemeProvider } from "next-theme";
import Nav from "../components/Nav";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Nav/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
