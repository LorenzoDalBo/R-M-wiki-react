import CharacterCard from "./CharacterCard";

function CharacterCardsArea({results}) {
    
    let display;
    console.log(results)

    if(results){
        display = results.map
    } else {
        display = "No characters found"
    }

    return(
        <div className="w-10/12 flex rounded-xl bg-slate-800 mt-2">
        <div className="flex">
            {display} 
        </div>
        <div>

        </div>
        </div>
    )
}

export default CharacterCardsArea;