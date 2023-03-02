import axios from "axios";
import Box from "components/Box/Box";
import { BackgroundContext } from "context/context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollFetch from "../ScrollFetch/ScrollFetch";

import { Input, Form, Button } from "./SearchInput.styled";



const SearchInput = ({handleSubmitInput, handleInput}) => {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const {setMoviesSearch} = useContext(BackgroundContext)
    const navigate = useNavigate()
    

    const handleSubmit = e => {
        e.preventDefault()
        handleSubmitInput(e.target.elements[0].value)
        
        setSearch('')
        navigate(`/search?query=${e.target.elements[0].value}`)
  }

  

    const handleChange = (e) => {
        handleInput(e.target.value)
        setSearch(e.target.value)
    }
    
    const clickItem = () => {
        setSearch('')
    }
    
    useEffect(() => {
        try {
            
            const fetchSearch = async () => {
                    const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US&page=1&include_adult=false&query=${search}`)
                    setMovies(data.results)
                    setMoviesSearch(data.results)
                
            }
            fetchSearch()
        } catch (error) {
            
        }
    }, [search, setMoviesSearch])
    
    
    // слздай backdrop на 100 процентов цирины и сделай как в модалке //
    return (
        <>
        
            
            <Box position='relative'>
                <Form onSubmit={handleSubmit}>
                   
                    <Input type="text" placeholder="Search..." value={search} onChange={handleChange}/>
            <Button   type="submit">ok
</Button>
            
                </Form>
                
                 {(search.length >= 3) && <ScrollFetch clickItem={clickItem}  movies={movies} />}
            </Box>
            
        
        </>
    )
}

export default SearchInput;