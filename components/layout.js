import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-primary ">
        <div className="App container mx-auto max-w-screen-xl">
          <Header />
          <Head>
            <title>이유승 포트폴리오</title>
            <meta name="description" content="이유승" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
}
