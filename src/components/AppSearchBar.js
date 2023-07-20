import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SummonerDropdown from './header/SummonerDropdown'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const dispatch = useDispatch()
  const summonerShow = useSelector((state) => state.summonerShow)
  const handleInputChange = (event) => {
    const { value } = event.target
    setSearchQuery(value)

    // Make the API call here using the search query
    fetch(`http://localhost:8080/summoners/search/${value}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSearchResults(data)
          dispatch({ type: 'set', summonerShow: !summonerShow })
        } else {
          setSearchResults([])
        }
      })
      .catch((error) => console.error('Error fetching search results:', error))
  }
  //treure el <ul> del summonerDropdown fa que funcioni com a una llista a sota,
  // mirar de passar les dades en el summonerDropdown si es pot i que les llisti a dins seu
  return (
    <div>
      <input type="text" placeholder="Search..." value={searchQuery} onChange={handleInputChange} />
      <SummonerDropdown>
        <ul>
          {searchResults.map((result) => (
            <li key={result.puuid}>{result.name}</li>
          ))}
        </ul>
      </SummonerDropdown>
    </div>
  )
}

export default SearchBar
