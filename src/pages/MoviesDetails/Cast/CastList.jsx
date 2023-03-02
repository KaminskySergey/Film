import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CastItem from "./CastItem";
import { List } from "./CastList.styled";

const CastList = ({isOpenCast}) => {
    const [actors, setActors] = useState([])
    const {moviesId} = useParams()
    useEffect(() => {
        try{
            const fetchDataActors = async () => {
                const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US`)
                setActors(data.cast)
            }
            fetchDataActors()
        } catch {

        }
    }, [moviesId])

    

    if(actors.length === 0){
        return
    }
    return (
        <>
        {isOpenCast && 
        <List>
            <CastItem  actors={actors}/>
        </List>}
        </>
    )
}

export default CastList;