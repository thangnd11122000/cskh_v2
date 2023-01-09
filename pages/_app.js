import dynamic from "next/dynamic";
import "nprogress/nprogress.css";
import "antd/dist/reset.css";
import "../styles/index.scss";
import { Roboto } from "@next/font/google";
import { Provider } from "react-redux";
// import { store } from "@/store";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false }
);

export default function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
      <main className={roboto.className}>
        <TopProgressBar />
        <Component {...pageProps} />
      </main>
    // </Provider>
  );
}
