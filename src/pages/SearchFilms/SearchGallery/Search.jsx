import { Backdrop, Container, HeaderNav } from "components/Layout/Layout.styled"
import { BackgroundContext } from "context/context";
import {  useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import SearchList from "../SearchList/SearchList";
import { getSearchThunk } from '../../../redux/search/search.thunk'
import PaginationSearch from "pages/Pagination/PaginationSearch";

const Search = ({query}) => {
    const [page, setPage] = useState(1)
    const {moviesSearch} = useContext(BackgroundContext)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSearchThunk({query, page}))
    }, [dispatch,  query, page])
    
    return (
        <>
        
        <Container>
            <Backdrop>
                     <HeaderNav />
                    <SearchList /> 
                    {moviesSearch.length !== 0 ? <PaginationSearch handlePageSearch={(number) => {setPage(number)}}/> : <p style={{color: 'white'}}>тут буде текст або картинка</p>}
            </Backdrop>
        </Container>
        
        </>
    )
}

export default Search