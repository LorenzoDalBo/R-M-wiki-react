import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

function SearchArea({setSearch, setPageNumber}) {
    return(
        <div className="flex justify-center">
            <div className="w-1/3">
                <SearchBar setPageNumber={setPageNumber} setSearch={setSearch}/>
            </div>
        </div>
    )
}

export default SearchArea;