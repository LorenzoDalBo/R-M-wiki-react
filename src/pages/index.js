
import SearchArea from '@/components/Header/SearchArea/SearchArea'
import FilterArea from '@/components/Header/Filter/FilterArea'
import CharacterCardsArea from '@/components/Header/CharactersCardsArea/CharacterCardsArea'
import { useEffect, useState } from 'react'
import Pagination from '@/components/Header/Pagination/Pagination'
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Home() {
  let [pageNumber, setPageNumber] = useState(1)
  let [fetchedData, updateFetchedData] = useState({results:[], info:{}})
  let [search, setSearch] = useState("")
  

  //Objeto literal = ((Não tem classe)(javascript) => JavaScript )
  let {info, results} = fetchedData;

  let charAPI = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  

  useEffect(() => {

    (async function() {

      let response = await fetch(charAPI)
      let data = await response.json()
      updateFetchedData(data)

    })()

  } , [charAPI])
  
  

  return (
    <main>
        <div className='flex h-auto flex-col'>
          <div className='h-fit w-screen mt-4'>
          <SearchArea setPageNumber={setPageNumber} search={search} setSearch={setSearch}/>
          </div>
          <div className='flex h-auto justify-evenly w-screen'>
            <FilterArea/>
            <CharacterCardsArea results={results} />
          </div>
          <div className='flex justify-center'>
          <Pagination pageNumber={pageNumber} info={info} setPageNumber={setPageNumber}/>
          </div>
        </div>
    </main>
  )
}