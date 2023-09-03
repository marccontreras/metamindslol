import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SummonerDropdown from './header/SummonerDropdown'
import { CDropdown, CDropdownToggle } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function Input({ input, handleInputChange, handleKeyDown, ...props }) {
  console.log(handleInputChange)
  return (
    <div {...props}>
      <input
        type="text"
        placeholder="Search...                                                   "
        value={input}
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        className="min-vw-50 w-100"
      />
    </div>
  )
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchSummoners, setSearchSummoners] = useState([])
  const navigate = useNavigate()

  const dispatch = useDispatch()
  let summonerShow = false
  const handleInputChange = (event) => {
    console.log(event)
    const { value } = event.target
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === 's') {
      console.log('tecla; ' + event.key)
      //setVisible((prevVisible) => !prevVisible)
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
      {/* Pass searchSummoners as summoners prop to SummonerDropdown */}
      <CDropdown variant="nav-item">
        <CDropdownToggle
          className="py-0 flex justify-content-between align-items-center"
          caret={false}
          trigger="click"
        >
          <Input
            key="temp"
            handleInputChange={handleInputChange}
            handleKeyDown={handleKeyDown}
            input={searchQuery}
          />
          <SummonerDropdown summoners={searchSummoners} />
        </CDropdownToggle>{' '}
      </CDropdown>
      {/* <ul>
        {searchSummoners.map((result) => (
          <li key={result.puuid}>{result.name}</li>
        ))}
      </ul>*/}
    </div>
  )
}
Input.propTypes = {
  index: PropTypes.number.isRequired,
  input: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
}
export default SearchBar
