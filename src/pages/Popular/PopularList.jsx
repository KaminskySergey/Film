
import Box from "components/Box/Box";

import PopularItem from "./PopularItem";
import { List } from "./PopularList.styled";

const PopularList = ({popular}) => {
    
    
    if(popular.length === 0 || popular === undefined){
        return;
    }
    
    
    return (
        <>
    <Box pt={64} pb={32} pl={16} pr={16} >
        <List>
            <PopularItem popularList={popular.results}/>
        </List>
    </Box>
        </>
    )
}

export default PopularList;