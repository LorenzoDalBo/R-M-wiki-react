function CharacterCard({character}) {
    return(
        <div className="flex flex-col bg-slate-600 w-full rounded-xl h-48">
            <div className="p-2 rounded-t-xl flex justify-center bg-slate-400">
                <img className="w-24 h-auto" src={character?.image}/>
            </div>
            <div>
                <h2>{character?.name}</h2>
                <h3>Last location:{character?.location?.name}</h3>
            </div>
        </div>
    )
}

export default CharacterCard;
