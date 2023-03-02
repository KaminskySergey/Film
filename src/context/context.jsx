import { createContext, useState } from "react";

export const BackgroundContext = createContext()

export const BackgroundProvider = ({children}) => {
    const [background, setBackground] = useState([])
    const [moviesSearch, setMoviesSearch] = useState([])
    const [isScrollBar, setScrollBar] = useState(false)
    return (
        <>
        <BackgroundContext.Provider value={{background, setBackground, moviesSearch, setMoviesSearch, isScrollBar, setScrollBar}}>
            {children}
        </BackgroundContext.Provider>
        </>
    )
}

