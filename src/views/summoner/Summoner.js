import React, { useEffect, useState } from 'react'
import Match from './Match'
import { useLocation } from 'react-router-dom'

const Summoner = () => {
  const [matchList, setMatchList] = useState([])
  const temporalSummoner = 'simply me' // Replace with your desired summoner name

  // Access the location object using useLocation()
  const location = useLocation()

  // Access the prop 'summoner' from the location state object
  const { summonerName, summonerPlatform } = location.state

  const handleFetchMatchList = () => {
    fetch(`http://localhost:8080/match/${summonerPlatform}/matches/summoner/${summonerName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then((data) => {
        setMatchList(data)
        console.log('Match list:', data) // Log the data received from the API
        window.location.reload() // Refresh the page after fetching the data
      })
      .catch((error) => console.error('Error fetching match list:', error))
  }

  useEffect(() => {
    //fetch(`http://localhost:8080/match/EUW/recentMatch/summoner/${temporalSummoner}`)
    fetch(`http://localhost:8080/match/EUW/summoner/${summonerName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then((data) => {
        setMatchList(data)
        console.log('Match list:', data) // Log the data received from the API
      })
      .catch((error) => console.error('Error fetching match list:', error))
  }, [summonerName])

  return (
    <div>
      <h1>{temporalSummoner}</h1>
      <h1>its({summonerName}) this</h1>
      {/* Add the button that triggers the fetch call and page refresh */}
      <button onClick={handleFetchMatchList}>Refresh Match List</button>
      <div>
        {Array.isArray(matchList) ? (
          matchList.map((match) => <Match key={match.id} match={match} />)
        ) : (
          <p>Loading match list...</p>
        )}
      </div>
    </div>
  )
}

export default Summoner
