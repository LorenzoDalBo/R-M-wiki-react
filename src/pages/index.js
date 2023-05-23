import Head from 'next/head'
import { Inter } from 'next/font/google'
import SearchArea from '@/components/Header/SearchArea/SearchArea'
import FilterArea from '@/components/Header/Filter/FilterArea'
import CharacterCardsArea from '@/components/Header/CharactersCardsArea/CharacterCardsArea'
import { useEffect, useState } from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1)
  let charAPI = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  

  useEffect(() => {

    (async function() {

      let data = await fetch(charAPI).then(res => res.json())
      console.log(data.results)

    })()

  } , [charAPI])
  


  return (
    <main>
        <div className='flex h-screen flex-col'>
          <div className='h-12 w-screen mt-4'>
          <SearchArea/>
          </div>
          <div className='flex h-screen justify-evenly w-screen'>
            <FilterArea/>
            <CharacterCardsArea/>
          </div>
        </div>
    </main>
  )
}
