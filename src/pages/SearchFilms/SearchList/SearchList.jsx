import Box from "components/Box/Box";
import { List } from "../SearchList.styled";
import SearchItem from "./SearchItem/SearchIte,";

const SearchList = ({movies}) => {
    
    return (
        <>
        <Box pt={64} pb={32} pl={16} pr={16} >
        <List>
            <SearchItem movies={movies}/>
        </List>
        </Box>
        </>
    )
}

export default SearchList;