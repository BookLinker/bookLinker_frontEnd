import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <title>#BookLinker</title>
        <meta name="description" content="도서 목록 추천 웹페이지" />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
