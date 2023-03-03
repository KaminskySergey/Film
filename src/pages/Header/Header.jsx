
import Box from "components/Box/Box";
import Navigation from "pages/Navigation/Navigation";
import { HeadCont } from "./Header.styled";

import SearchInput from "./SearchInput/SearchInput";

const Header = ({handleSubmitInput, movies }) => {
    
    // здесь будет debounce //////////////////////////
    
    
   
    
    return (
        <>
        <HeadCont>
        <Box display='flex' justifyContent='space-between' className="container" style={{ display: 'flex', alignItems: 'center'}}>
            <Navigation/>
            <SearchInput movies={movies}  handleSubmitInput={handleSubmitInput}/>
            
        </Box>
        </HeadCont>
        </>
    )
}

export default Header;