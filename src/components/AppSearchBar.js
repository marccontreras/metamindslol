import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SummonerDropdown from './header/SummonerDropdown'
import Dropdown from './header/CustomDropdownToggle.tsx'
import { CDropdown } from '@coreui/react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchSummoners, setSearchSummoners] = useState([])
  const navigate = useNavigate()

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
          setSearchSummoners(data)
          dispatch({ type: 'set', summonerShow: !summonerShow })
        } else {
          setSearchSummoners([])
        }
      })
      .catch((error) => console.error('Error fetching search results:', error))
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === 's') {
      console.log('tecla; ' + event.key)
      //setVisible((prevVisible) => !prevVisible)
    }
    if (event.key === 'Enter' && searchQuery.length > 0) {
      console.log('HORA DENVIAR ' + searchQuery)
      fetch(`http://localhost:8080/summoners/EUW/${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          navigate(`/summoner/?summonerName=${searchQuery}`, {
            state: { summonerName: searchQuery, summonerPlatform: data.platform },
          })
        })
        .catch((error) => console.error('Error fetching search results:', error))
    }
  }

  return (
    <div>
      {/* Pass searchSummoners as summoners prop to SummonerDropdown */}
      <CDropdown variant="nav-item">
        <Dropdown
          className="py-0 flex justify-content-between align-items-center"
          caret={false}
          trigger="click"
        >
          <input
            type="text"
            placeholder="Search...                                                   "
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="min-vw-50 w-100"
          />{' '}
        </Dropdown>{' '}
        <SummonerDropdown summoners={searchSummoners} />
      </CDropdown>
      {/* <ul>
        {searchSummoners.map((result) => (
          <li key={result.puuid}>{result.name}</li>
        ))}
      </ul>*/}
    </div>
  )
}

export default SearchBar