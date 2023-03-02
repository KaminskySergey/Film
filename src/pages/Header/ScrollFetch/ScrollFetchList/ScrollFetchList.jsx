

const ScrollFetchList = ({children, clickItem}) => {
    return (
        <>
        <ul onClick={clickItem}>
            {children}
        </ul>
        </>
    )
}

export default ScrollFetchList;