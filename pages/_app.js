import Router from "next/router";
import NProgress from "nprogress";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "nprogress/nprogress.css";
import "../components/Header";
import "../styles/all.scss";
import Signup from "../components/signup";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className ="layout">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
    </>
  );
}

export default MyApp;
