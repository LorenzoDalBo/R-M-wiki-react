import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

function SearchArea() {
    return(
        <div className="flex justify-center">
            <div className="p-2 bg-slate-800 w-1/3">
                <SearchBar/>
                <SearchButton/>
            </div>
        </div>
    )
}

export default SearchArea;