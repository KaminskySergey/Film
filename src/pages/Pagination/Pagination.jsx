import ReactPaginate from 'react-paginate';



const Pagination = ({handlePage}) => {
    
    
    return (
        <>
    <ReactPaginate
        className='root'
        breakLabel="..."
        nextLabel=" >"
        onPageChange={e => handlePage(e.selected + 1)}
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


export default Pagination
