import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SummonerDropdown from './header/SummonerDropdown'
import Dropdown from './header/CustomDropdownToggle.tsx'
import { CDropdown, CDropdownToggle } from '@coreui/react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchSummoners, setSearchSummoners] = useState([])
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const summonerShow = useSelector((state) => state.summonerShow)

  const searchInput = React.useRef(null)
  useEffect(() => {
    searchInput.current.focus()
  }, [searchQuery])

  const handleInputChange = (event) => {
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

  const handleFormSubmit = (event) => {
    event.preventDefault() // Prevent the default form submission behavior

    if (searchQuery.length > 0) {
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
      {/* Use a <form> element to wrap the input */}
      <form onSubmit={handleFormSubmit}>
        <CDropdown variant="dropdown">
          <CDropdownToggle
            className="py-0 flex justify-content-between align-items-center"
            caret={false}
            trigger="click"
          >
            <input
              ref={searchInput}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
              className="min-vw-50 w-100"
            />{' '}
            <SummonerDropdown summoners={searchSummoners} />
          </CDropdownToggle>{' '}
        </CDropdown>
      </form>
    </div>
  )
}

export default SearchBar
