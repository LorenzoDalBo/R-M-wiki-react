import SearchButton from "./SearchButton";

function SearchBar({setSearch, setPageNumber}) {
    return(
        <form className="flex">
        <input onChange={(e) => {setSearch(e.target.value), setPageNumber(1)}} type="text" placeholder="Busca..." className="w-4/5 border-solid border-2"></input>
        <SearchButton/>
        </form>
    )
}

export default SearchBar;