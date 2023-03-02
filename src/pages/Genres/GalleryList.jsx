import GalleryItem from "./GalleryItem"
import { List } from "./GalleryList.styled"

const GalleryList = ({genresList}) => {
    return (
        <>
        <List>
            <GalleryItem genresList={genresList}/>
        </List>
        </>
    )
}

export default GalleryList