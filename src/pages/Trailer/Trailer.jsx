import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Trailer = () => {
    const [trailerMovies, setTrailerMovies] = useState([])
    const {moviesId} = useParams()
    
    
    useEffect(() => {
        try {
            const fetchTrailer = async () => {
                const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${!moviesId ? '' : moviesId}/videos?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US&append_to_response=credits`)
                setTrailerMovies(data.results[0].key)
            }
            fetchTrailer()
        } catch (error) {
            
        }
    }, [moviesId])

    
    return (
        <>
            <iframe style={{ border: '3px solid red'}} width="100%" height="100%" src={`https://www.youtube.com/embed/${trailerMovies}`} title={trailerMovies}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </>
    )
}

export default Trailer;