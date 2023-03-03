import { Backdrop, Container, HeaderNav } from "components/Layout/Layout.styled"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchList from "../SearchList/SearchList";
import { getSearchThunk } from '../../../redux/search/search.thunk'
import PaginationSearch from "pages/Pagination/PaginationSearch";
import NotResult from "../NotResult/NotResult";

const Search = ({query}) => {
    const [page, setPage] = useState(1)
    const films = useSelector(state => state.search.films)
    const dispatch = useDispatch()
    


    useEffect(() => {
        dispatch(getSearchThunk({query, page}))
    }, [dispatch,  query, page])
    
    if(films.results === undefined) {
        return;
    }
    return (
        <>
        
        <Container>
            <Backdrop>
                     <HeaderNav />
                    <SearchList /> 
                    {films.results.length > 0 ? <PaginationSearch handlePageSearch={(number) => {setPage(number)}}/>
                    : <NotResult />}
            </Backdrop>
        </Container>
        
        </>
    )
}

export default Search