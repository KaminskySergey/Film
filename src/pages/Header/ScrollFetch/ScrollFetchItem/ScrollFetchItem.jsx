import Box from "components/Box/Box";
import { Link } from "react-router-dom";
import { ContImg, Img, Item } from "./ScrollFetch.styled";
import notImage from './not-image.png'

const style = {
    width: '100%',
}
const ScrollFetchItem = ({movies}) => {
    
return (
    <>
    {
        movies.map((el) => (
            <Item key={el.id}>
                    <Link style={style} to={`/movies/${el.id}`}>
                        <Box display='flex' alignItems='center'>
                        <ContImg>
                        <Img  src={!el.poster_path ? notImage : `https://image.tmdb.org/t/p/w300/${el.poster_path}`} alt={el.original_title} />
                        </ContImg>
                        <div>
                            <p>{el.original_title}</p>
                            <p>({el.release_date.substring(0,4)})</p>
                        </div>
                        </Box>
                    </Link>
                </Item>
        ))
    }
    </>
)
}

export default ScrollFetchItem;