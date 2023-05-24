import CharacterCard from "./CharacterCard";

function CharacterCardsArea({results}) {
    let display;
    if(results?.length > 0){
        display = results.map((character) =><CharacterCard key={character.id} character={character}/>)
    } else {
        display = <p>"No characters found"</p>
    }

    return(
        <div className="w-10/12 grid p-2 gap-4 grid-cols-5 grid-rows-4 rounded-xl bg-slate-800 mt-2">
            {display} 
        </div>
    )
}

export default CharacterCardsArea;