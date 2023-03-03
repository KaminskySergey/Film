import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Description, Img, Item, Raiting } from "./SearchItem.syled";
import notImage from './not-image.png'

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

const SearchItem = () => {
    const films = useSelector(state => state.search.films)
    

        if(films.results === undefined){
            return
        }
    return (
        <>
        {
            films.results.map((el) => (
                <Item key={el.id}>
                    <Link to={`/movies/${el.id}`}>
                        <Img  src={!el.poster_path ? notImage : `https://image.tmdb.org/t/p/w300/${el.poster_path}`} alt={el.original_title} />
                        <Raiting style={
                            {
                                backgroundColor: `${raitingFilm(Number(el.vote_average.toFixed(1) * 10))}`
                            }
                        }>
                            <p>{el.vote_average.toFixed(1) * 10}%</p>
                            
                        </Raiting>
                        <Description>
                            <p>{el.original_title}</p>
                            <p>({el.release_date.substring(0,4)})</p>
                        </Description>
                        </Link>
                </Item>
            ))
        }
        </>
    )
}

export default SearchItem;