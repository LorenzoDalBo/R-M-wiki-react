function Pagination({pageNumber,setPageNumber}) {
    
    function next() {
        setPageNumber((page) => page + 1)
    };

    function prev() {
        if(pageNumber === 1) return;
        setPageNumber((page) => page - 1)
    };

    return(
        <div>
            <ul className="flex justify-around">
                <li>
                    <button onClick={prev}>Prev</button>
                </li>
                <li>
                    <button onClick={next}>Next</button>
                </li>
            </ul>
        </div>
    )
    };
    
export default Pagination;