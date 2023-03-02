import AsideList from "./AsideList";
import { Title } from "./CategoriesAside.styled";

const CategoriesAside = ({genres}) => {
return (
    <>
    <Title>Categories</Title>
    <AsideList genres={genres}/>
    </>
)
}

export default CategoriesAside;