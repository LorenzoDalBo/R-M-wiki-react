import CharacterCard from "./CharacterCard";

function CharacterCardsArea() {
    return(
        <div className="w-10/12 flex rounded-xl bg-slate-800 mt-2">
        <div className="flex">
            <CharacterCard charName={"Lorenzo"} lastLoc={"A puta que pariu"} />  
        </div>
        <div>
            
        </div>
        </div>
    )
}

export default CharacterCardsArea;