import React, { useEffect, useState } from 'react'
import Match from './Match'

const Summoner = () => {
  const [matchList, setMatchList] = useState([])
  const temporalSummoner = 'simply me' // Replace with your desired summoner name

  useEffect(() => {
    //fetch(`http://localhost:8080/match/EUW/recentMatch/summoner/${temporalSummoner}`)
    fetch(`http://localhost:8080/match/EUW/summoner/${temporalSummoner}`)
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
  }, [temporalSummoner])

  return (
    <div>
      <h1>{temporalSummoner}</h1>
      <div>
        {matchList.map((match) => (
          <Match key={match.id} match={match} />
        ))}
      </div>
    </div>
  )
}

export default Summoner
