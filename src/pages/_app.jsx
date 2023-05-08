// pages/_app.js
// import { Gruppo, Monoton, Days_One } from "next/font/google";
import "../styles/global.css";

import { Layout } from "@/layouts/main";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
