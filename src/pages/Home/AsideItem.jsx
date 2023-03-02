import { Link } from "react-router-dom";
import { Item } from "./AsideItem.styled";

const AsideItem = ({genres}) => {
    return (
        <>
        {
            genres.map((el) => (
                <Item key={el.id}>
                    <Link style={{width: '100%', display: 'block', padding: '4px 8px'}} to={`/genres/${el.id}`}>
                        <p>{el.name}</p>
                    
                    </Link>
                </Item>
            ))
        }
        </>
    )
}

export default AsideItem;