function CharacterCard({character}) {
    return(
        <div className="flex flex-col m-4 bg-slate-400 w-2/12 rounded-xl h-2/5">
            <div>
                <img src={character?.image}/>
            </div>
            <div>
                <h2>{character?.name}</h2>
                <h3>Last location:{character?.location?.name}</h3>
            </div>
        </div>
    )
}

export default CharacterCard;
