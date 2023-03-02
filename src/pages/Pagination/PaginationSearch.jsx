import ReactPaginate from "react-paginate"


const PaginationSearch = ({handlePageSearch}) => {
    

    return (
        <>
    <ReactPaginate
        className='root'
        breakLabel="..."
        nextLabel=" >"
        onPageChange={e => handlePageSearch(e.selected + 1)}
        pageRangeDisplayed={7}
        pageCount={100}
        previousLabel="< "
        renderOnZeroPageCount={null}
        marginPagesDisplayed={0}
        activeClassName='activePage'
        
      />
    </>
    )
}


export default PaginationSearch
