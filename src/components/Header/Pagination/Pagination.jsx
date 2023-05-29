import ReactPaginate from 'react-paginate';

function Pagination({pageNumber,setPageNumber, info}) {
    return <ReactPaginate nextLabel="Next"
     previousLabel="Prev"
      className='justify-content-center p-1 rounded-b-lg gap-3 flex' 
      pageCount={info?.pages}
      nextClassName=''
      previousClassName='p-1 rounded-lg'
      pageClassName='border-solid p-1 rounded-md border-2 border-black'
      activeClassName='bg-slate-200 p-1 rounded-md'
      previousLinkClassName='text-black'
      nextLinkClassName='text-black'
      onPageChange={(data) => {
        setPageNumber(data.selected + 1)
      }}/>
    };
    
export default Pagination; 