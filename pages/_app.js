import "../styles/globals.css";
import Header from "../modules/core/components/Header";
import Footer from "../modules/core/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}

export default MyApp;
