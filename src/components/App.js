import NavBar from "./NavBar"
import Footer from "./Footer"
import Header from "./Header"
import Main from './Main'
import {BrowserRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
    return (
        <BrowserRouter>
            <Header />
            <NavBar/>
            <Main/>
            <Footer/>
            <ToastContainer/>
       </BrowserRouter>
    )
}

export default App