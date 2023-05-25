import ReactPaginate from 'react-paginate';

function Pagination({pageNumber,setPageNumber, info}) {
    return <ReactPaginate nextLabel="Next"
     previousLabel="Prev"
      className='justify-content-center p-1 rounded-b-lg border-b-2 border-x-2 border-solid border-blue-700 bg-blue-400 gap-4 flex' 
      pageCount={info?.pages}
      nextClassName='bg-blue-700 p-1 rounded-lg text-white border-solid border-2 border-blue-900'
      previousClassName='bg-blue-700 p-1 rounded-lg text-white border-solid border-2 border-blue-900'
      pageClassName='bg-blue-500 p-1 rounded-md'
      activeClassName='bg-slate-200 p-1 rounded-md'
      previousLinkClassName='text-white'
      nextLinkClassName='text-white'
      onPageChange={(data) => {
        setPageNumber(data.selected + 1)
      }}/>
    };
    
export default Pagination; 