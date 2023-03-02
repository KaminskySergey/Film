import axios from "axios";
import Box from "components/Box/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  Pagination  from "../Pagination/Pagination";

import GalleryList from "./GalleryList";


const Gallery = ({children}) => {
    const [genresList, setGenresList] = useState([])
    const {genresId} = useParams()
    const [page, setPage] = useState(1)
    useEffect(() => {
        try {
            const fetchDataGenresList = async () => {
            const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresId}`)
            // console.log(data, 'gg');
            setGenresList(data)
            }
            fetchDataGenresList()
        } catch (error) {
            
        }
    }, [genresId, page])
    console.log(genresList.length);
    if(genresList.length === 0){
        return
    }
    return (
        <>
        <Box pt={64} pl={16} pr={16} display='flex' flexDirection='column' alignItems='center'>
            <GalleryList genresList={genresList}>
                {children}
            </GalleryList>
            <Pagination handlePage={(number) => setPage(number)}/>
        </Box>
        
        </>
    )
}

export default Gallery;