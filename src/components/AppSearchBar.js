import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SummonerDropdown from './header/SummonerDropdown'
import { CDropdown, CDropdownToggle } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchSummoners, setSearchSummoners] = useState([])
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const summonerShow = useSelector((state) => state.summonerShow)

  const handleInputChange = (value) => {
    setSearchQuery(value)

    // Make the API call here using the search query
    fetch(`https://metamindslol-backend-b6e08f21de0e.herokuapp.com/summoners/search/${value}`)
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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === 's') {
      console.log('tecla: ' + event.key)
      // Do something with the search key press
    }
    if (event.key === 'Enter' && searchQuery.length > 0) {
      console.log('HORA DENVIAR ' + searchQuery)
      fetch(`https://metamindslol-backend-b6e08f21de0e.herokuapp.com/summoners/EUW/${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          navigate(`/summoner/?summonerName=${searchQuery}`, {
            state: { summoner: data },
          })
        })
        .catch((error) => console.error('Error fetching search results:', error))
    }
  }

  return (
    <div>
      <CDropdown variant="nav-item">
        <CDropdownToggle
          className="py-0 flex justify-content-between align-items-center"
          caret={false}
          trigger="click"
        >
          <Select
            className="w-100"
            placeholder="Search..."
            value={searchQuery}
            onChange={(selectedOption) => handleInputChange(selectedOption.value)}
            onKeyDown={handleKeyDown}
            options={searchSummoners.map((result) => ({
              value: result.name,
              label: result.name,
            }))}
          />
          <SummonerDropdown summoners={searchSummoners} />
        </CDropdownToggle>
      </CDropdown>
    </div>
  )
}

export default SearchBar
