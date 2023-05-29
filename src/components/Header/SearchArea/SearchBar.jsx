import SearchButton from "./SearchButton";

function SearchBar({setSearch, setPageNumber}) {
    return(
        <form className="flex gap-1">
        <input onChange={(e) => {setSearch(e.target.value), setPageNumber(1)}} type="text" placeholder="Busca..." className="w-4/5 p-1 rounded-lg border-solid border-blue-400 border-2"></input>
        <SearchButton/>
        </form>
    )
}

export default SearchBar;