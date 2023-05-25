import Head from 'next/head'
import { Inter } from 'next/font/google'
import SearchArea from '@/components/Header/SearchArea/SearchArea'
import FilterArea from '@/components/Header/Filter/FilterArea'
import CharacterCardsArea from '@/components/Header/CharactersCardsArea/CharacterCardsArea'
import { useEffect, useState } from 'react'
import Pagination from '@/components/Pagination/Pagination'





export default function Home() {
  let [pageNumber, setPageNumber] = useState(1)
  let [fetchedData, updateFetchedData] = useState({results:[], info:{}})
  
  let {info, results} = fetchedData;

  let charAPI = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  

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
          <div className='h-12 w-screen mt-4'>
          <SearchArea/>
          </div>
          <div className='flex h-screen justify-evenly w-screen'>
            <FilterArea/>
            <CharacterCardsArea results={results} />
          </div>
          <Pagination/>
        </div>
    </main>
  )
}
