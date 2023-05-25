function CharacterCard({character}) {
    return(
        <div className="flex flex-col border-solid border-4 border-blue-600 bg-slate-400 w-full p-2 text-center h-auto rounded-xl">
            <div className="flex justify-center">
                <img className="w-1/2 border-2 border-solid border-blue-600 flex justify-center" src={character?.image}/>
            </div>
            <div className="text-start h-fit">
                <h2><strong className="text-xl">{character?.name}</strong></h2>
                <h3 className="text-xl">Last location:<br></br><p className="text-base">{character?.location?.name}</p></h3>
            </div>
        </div>
    )
}

export default CharacterCard;
