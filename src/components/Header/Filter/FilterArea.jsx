import FilterOption from "./FilterOption";

function FilterArea() {
    return(
        <div className="w-1/12 h-fit rounded-xl flex flex-col bg-slate-500 text-center">
            <h2 className="bg-slate-400 rounded-t-xl text-xl">FILTERS</h2>
            <FilterOption filterName={"Status"}/>
            <FilterOption filterName={"Gender"}/>
            <FilterOption filterName={"Species"}/>
            <FilterOption filterName={"Episodes"}/>
        </div>
    )
}

export default FilterArea;