import AsideItem from "./AsideItem";

const AsideList = ({genres}) => {
    return (
        <>
        <ul>
            <AsideItem genres={genres}/>
        </ul>
        </>
    )
}

export default AsideList;