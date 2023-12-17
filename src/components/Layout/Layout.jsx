import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../Routes/Routers";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
