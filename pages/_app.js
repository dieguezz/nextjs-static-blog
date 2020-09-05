import "../styles/globals.scss";
import Header from "../modules/core/components/Header";
import Footer from "../modules/core/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header></Header>
      <div className="route">
        <Component {...pageProps} />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MyApp;
