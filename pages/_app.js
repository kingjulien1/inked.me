import { Navbar } from "components/Navbar";
import { Provider } from "next-auth/client";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}
