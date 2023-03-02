import Box from "components/Box/Box";

import ScrollFetchItem from "./ScrollFetchItem/ScrollFetchItem";
import ScrollFetchList from "./ScrollFetchList/ScrollFetchList";

const ScrollFetch = ({movies, clickItem}) => {
    
return (
        <>
        <Box className="cont__scroll" backgroundColor='#0e0b25' zIndex='9999999999' position='absolute' height='500px' overflowY='scroll' borderRadius='8px' width='100%'>
        <ScrollFetchList clickItem={clickItem}>
            <ScrollFetchItem movies={movies}/>
        </ScrollFetchList>
        </Box>
        </>
    
    
)
}

export default ScrollFetch;