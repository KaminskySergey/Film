import { Backdrop } from "components/Layout/Layout.styled";
import { Container, HeaderNav } from "./Home.styled";
import PopularList from "../Popular/PopularList";
import  Pagination  from "../Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularThunk } from "redux/pupular/popular.thunk";


const Home = () => {
    const popular = useSelector(state => state.popular.popular)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getPopularThunk(page))
        
    }, [dispatch, page])



    return (
        <>
        <Container>
                <Backdrop>
                <HeaderNav />
                
                <PopularList popular={popular}/> 
                <Pagination handlePage={(number) => setPage(number)}/>

                
                </Backdrop>
                
        </Container>
        </>
    )
}

export default Home;