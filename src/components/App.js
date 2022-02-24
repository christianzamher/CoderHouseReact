import NavBar from "./NavBar"
import Footer from "./Footer"
import Header from "./Header"

//import container from react-bootstrap
import { Container } from 'react-bootstrap'

function App() {
    return (
        <>
            <Header />
            <NavBar/>
            <Container as="main">
           
                <div></div>
           
            </Container>
            <Footer/>
        </>
    )
}

export default App