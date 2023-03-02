import axios from 'axios';

import { useEffect, useState } from "react";

import PopularSliderItem from "./PopularSliderItem";
import PopularSliderList from "./PopularSliderList";

const PopularSlider = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        try {
            const fetchDataPopularSlider = async () => {
                const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US&page=1`)
                setPopular(data.results);
            }
            fetchDataPopularSlider()
        } catch (error) {
            
        }
    }, [])

    // const  decodeGenres =([...args]) => {
    //     const genres = [];
    //     args.map(id =>
    //       genreArray.find(el => {
    //         if (el.id === id) {
    //           genres.push(el.name);
    //         }
    //       })
    //     );
      
    //     return genres.join(', ');
    //   }
    return (
        <>
        
        <PopularSliderList>
            <PopularSliderItem item={popular}/>
        </PopularSliderList>
        </>
    )
}

export default PopularSlider;