function FilterOption(props) {
    return(
        <div className="my-2">
            <button className="bg-slate-700 p-1 w-20 rounded-md text-lg text-white">{props.filterName}</button>
        </div>
    )
}
export default FilterOption;