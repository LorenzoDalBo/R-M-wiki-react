function CharacterCard({character}) {
    return(
        <div className="flex flex-col border-solid border-4 border-blue-500 bg-slate-400 w-full p-2 text-center h-auto rounded-xl">
            <div className="flex justify-center">
                <img className="w-1/2 flex justify-center" src={character?.image}/>
            </div>
            <div className="text-start h-fit">
                <h2 className="text-xl"><strong>{character?.name}</strong></h2>
                <h3><strong className="text-base font-serif">Last location:<br></br></strong>{character?.location?.name}</h3>
            </div>
        </div>
    )
}

export default CharacterCard;
