import NavBar from "../../components/Header/NavBar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div data-theme="light" className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Root;
