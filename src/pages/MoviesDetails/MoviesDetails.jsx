import axios from "axios";
import Box from "components/Box/Box";
import { Backdrop, Container, HeaderNav } from "components/Layout/Layout.styled";
import { BackgroundContext } from "context/context";
import { BsArrowDown } from 'react-icons/bs';
import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import { ContDescription, ContScore,  CountryList,  GenresList, Img, Overview, Tagline, Title } from "./MoviesDetails.styled";

function raitingFilm(num){
    
    if(num < 50){
        return 'red'
    }
    if(num >= 50 && num < 70){
        return 'orange'
    }
    if(num >= 71){
        return 'green'
    }
    }

    

export const MoviesDetails = ({handleToggle}) => {
    const [movieDetails, setMovieDetails] = useState([])
    const {moviesId} = useParams()
    const {background,setBackground} = useContext(BackgroundContext)
    

    useEffect(() => {
        
        try{
            const fetchDataDetails = async () => {
                const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${!moviesId ? '' : moviesId}?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US`)
                console.log(data, 'details')
                setMovieDetails(data)
                setBackground(data.backdrop_path)
            }
            fetchDataDetails()
        } catch {
            
        }
    }, [moviesId, setBackground])
    
    
    
    if(movieDetails.length === 0){
        return;
    }
    return (
        <>
        <Container style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${!background ? '' : background}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <Backdrop>
                <HeaderNav />
                <Box display='flex' pt={64} pb={32} pl={16} pr={16} flexDirection='column'>
                <Box display='flex' mb={32}>
                <Box backgroundColor='white' width='300px' height='450px' marginRight='32px' borderRadius='16px'>
                    <Img style={{width: '300px', height: '450px', borderRadius: '16px', overflow: "hidden", outline: '3px solid gold'}} src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`} alt={movieDetails.original_title} />
                </Box>
                <Box pt={32} pb={32}>
                    <Box height='100%' display='flex' flexDirection='column' >
                        <Title>{movieDetails.original_title} <span>({movieDetails.release_date.substring(0,4)})</span></Title>
                        <ContDescription>
                            <p>{movieDetails.release_date}</p>
                            <span>
                                <GenresList>
                                {movieDetails.genres.map(el => (
                                    <li key={el.id}>
                                        <Link style={{textDecoration: 'underline'}} to={`/genres/${el.id}`}>
                                            <p>{el.name}</p>
                                        </Link>
                                    </li>
                                ))}
                                </GenresList>
                            </span>
                            <span>
                                <CountryList>
                                    {
                                        movieDetails.production_countries.map(el => (
                                            <li key={el.iso_3166_1}>
                                                <p>({el.iso_3166_1})</p>
                                            </li>
                                        ))
                                    }
                                </CountryList>
                            </span>
                        </ContDescription>
                        <Box mb={32}>
                            {movieDetails.tagline === "" ? '' : <Tagline>"{movieDetails.tagline}"</Tagline>}
                        </Box>
                        <Box mb={32}>
                            <h4 style={{marginBottom: '16px', color: 'white'}}>Overview:</h4>
                            <Overview>{movieDetails.overview}</Overview>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <ContScore style={{
                                backgroundColor: `${raitingFilm(Number(movieDetails.vote_average.toFixed(1) * 10))}`,
                                marginRight: '16px',
                            }}>
                                <p style={{fontWeight: 500}}>{movieDetails.vote_average.toFixed(1) * 10}%</p>
                                
                            </ContScore>
                                <div>
                                <p style={{fontWeight: 500, color: 'white'}}>User Score</p>
                                </div>
                            
                        </Box>
                    </Box>
                </Box>
                </Box>
                <div>
                    <div>
                        <Link style={{marginBottom: '32px', display: 'flex', alignItems: 'end'}} name='cast' onClick={(e) => handleToggle(e)}  to='cast'><BsArrowDown />Additional information:</Link>
                        
                        <Outlet />
                          
                                
            
                    </div>
                </div>
            </Box>
                </Backdrop>
        </Container>
            
        </>
    )
}

export default MoviesDetails;