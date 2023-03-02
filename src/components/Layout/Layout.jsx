import axios from "axios";
import Box from "components/Box/Box";
import Header from "pages/Header/Header";
import CategoriesAside from "pages/Home/CategoriesAside";
import PopularSlider from "pages/PopularSlider/PopularSlider";
import {  useEffect, useState } from "react";
import { Aside} from "./Layout.styled";

const Layout = ({children, handleSubmitInput, handleInput, search, movies}) => {
    const [genres, setGenres] = useState([])
    
    
    useEffect(() => {
        try {
            const fetchDataGenres = async () => {
            const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=102d4305e0abdbf0fd48836d5abb1978`)
            console.log(data.genres)
            setGenres(data.genres)
            }
            fetchDataGenres()
        } catch (error) {
            
        }
    }, [])
return (
    <>
            
        
        <Header movies={movies} search={search} handleInput={handleInput} handleSubmitInput={handleSubmitInput}/>
        
        <main>
        
        <Box pt={132} pb={30} width={1200} ml='auto' mr='auto' pl={15} pr={15} display='flex' justifyContent='center'>
        <PopularSlider/>
        </Box>
            <Box width={1200} ml='auto' mr='auto' pb={32} borderRadius={30} display='flex'>
            <Aside >
            <CategoriesAside genres={genres}/>
            </Aside>
            
                {children}
            

                
                    
            </Box>

            
        </main>
        
        
        
    </>
)
}

export default Layout;