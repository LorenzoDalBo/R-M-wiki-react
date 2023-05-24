import ReactPaginate from 'react-paginate';

function Pagination({pageNumber,setPageNumber, info}) {
    return <ReactPaginate nextLabel={"Next"}
     previousLabel={"Prev"}
      className='pagination justify-content-center flex' 
      pageCount={info?.pages}
      pageLinkClassName="page-link"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1)
      }}/>
    };
    
export default Pagination; 