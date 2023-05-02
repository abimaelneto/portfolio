// pages/_app.js
// import { Gruppo, Monoton, Days_One } from "next/font/google";
import "../styles/global.css";

import { Layout } from "@/layouts/main";
// // If loading a variable font, you don't need to specify the font weight
// const gruppo = Gruppo({ weight: "400", subsets: ["latin"] });
// const monoton = Monoton({ weight: "400", subsets: ["latin"] });
// const daysOne = Days_One({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
