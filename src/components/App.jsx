// import Genres from "pages/Genres/Genres";
// import Home from "pages/Home/Home";
// import CastList from "pages/MoviesDetails/Cast/CastList";
// import MoviesDetails from "pages/MoviesDetails/MoviesDetails";
// import Search from "pages/SearchFilms/SearchGallery/Search";
import { lazy, Suspense, useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
// import Layout from "./Layout/Layout";

const Genres = lazy(() => import('pages/Genres/Genres'))
const Home = lazy(() => import('pages/Home/Home'))
const CastList = lazy(() => import('pages/MoviesDetails/Cast/CastList'))
const MoviesDetails = lazy(() => import('pages/MoviesDetails/MoviesDetails'))
const Search = lazy(() => import('pages/SearchFilms/SearchGallery/Search'))
const Layout = lazy(() => import('./Layout/Layout'))

export const App = () => {
  
  const [isOpenCast, setIsOpenCast] = useState(false)
  const [seachParams, setSearchParams] = useSearchParams()
const query = seachParams.get('query') ?? '';

const handleSubmitInput = (data) => {
    setSearchParams('query' !== '' ? {query: data} : {})
    }

    const handleToggle = (e) => {
        
        const {name} = e.target
    switch (name) {
    case 'cast':
      setIsOpenCast(pS => !pS)
      break;
    default:
      return;
  }
}
  return (
    <>
    
        <Layout handleSubmitInput={handleSubmitInput}>
          <Suspense>
        <Routes >
      <Route path="" element={ <Home query={query}/>}/>
      <Route path="/genres/:genresId" element={ <Genres/>}/>
      <Route path="/search" element={ <Search query={query}/>}/>
      <Route path="/movies/:moviesId" element={ <MoviesDetails handleToggle={handleToggle} />}>
        <Route path="cast" element={<CastList  isOpenCast={isOpenCast} />}></Route>
        
      </Route>

    </Routes>
          </Suspense>
        </Layout>
    
    </>
  );
};
