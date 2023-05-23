function CharacterCard(props) {
    return(
        <div className="flex flex-col m-4 bg-slate-400 w-2/12 rounded-xl h-2/5">
            <div>
                <img></img>
            </div>
            <div>
                <h2>{props.charName}</h2>
                <h3>Last location:{props.lastLoc}</h3>
            </div>
        </div>
    )
}

export default CharacterCard;
