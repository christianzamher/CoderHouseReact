import NavBar from "./NavBar"
import Footer from "./Footer"
import Header from "./Header"
import Main from './Main'
import ItemListContainer from './ItemListContainer'





function App() {
    return (
        <>
            <Header />
            <NavBar/>
            <ItemListContainer greetings= 'Bienvenidos al E-Comerce '/>                   
            <Main/>
            <Footer/>
        </>
    )
}

export default App