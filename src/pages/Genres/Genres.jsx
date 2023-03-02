
import { Backdrop, Container, HeaderNav } from "components/Layout/Layout.styled"


import Gallery from "./Gallery"

const Genres = () => {
    
    return (
        <>
        
        <Container>
            <Backdrop>
                    <HeaderNav />
                    <Gallery /> 
            </Backdrop>
        </Container>
        
        </>
    )
}

export default Genres