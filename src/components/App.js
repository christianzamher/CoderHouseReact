import NavBar from "./NavBar";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MiProvider } from "./CartContext";


function App() {
  return (
     <MiProvider>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Main />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
     </MiProvider>
  );
}

export default App;
