import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const TeamParticipants = ({ participants, gameId, imageSize }) => {
  const navigate = useNavigate()

  const fetchSummoner = (event) => {
    // Get the summoner name of the clicked participant
    const summonerName = participants[event].summonerName

    // Make the API call here using the search query
    fetch(`http://localhost:8080/summoners/EUW1/${summonerName}`)
      .then((response) => response.json())
      .then((data) => {
        if (data !== 'Summoner not found') {
          // If summoner data is fetched successfully, navigate to the summoner page
          navigate(`/summoner/?summonerName=${summonerName}`, { state: { summoner: data } }) // Pass the whole summoner object as the state
        } else {
          // Handle case when summoner is not found
          console.error('Summoner not found')
        }
      })
      .catch((error) => console.error('Error fetching summoner data:', error))
  }

  const formatSummonerName = (summonerName) => {
    const desiredLength = 16
    if (summonerName.length < desiredLength) {
      let tempSum = summonerName + '1'.repeat(desiredLength - summonerName.length)
      console.log(tempSum)
      return tempSum
    }
    return summonerName
  }

  return (
    <>
      {participants.map((participant, index) => (
        <div key={index} className="d-flex align-items-center">
          <img
            style={{ height: imageSize, width: imageSize }}
            className="ms-2 p-1"
            key={participant.championId}
            src={`/assets/images/champions/${participant.championName}.png`}
            alt={participant.championId}
          />
          <span
            className="ms-2"
            style={{ cursor: 'pointer', whiteSpace: 'pre' }} // Add white-space: pre
            onClick={() => fetchSummoner(index)}
          >
            {participant.summonerName}
          </span>
          <div className="flex-fill flex-grow-1"></div>
        </div>
      ))}
    </>
  )
}

TeamParticipants.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.object).isRequired,
  gameId: PropTypes.number.isRequired,
  imageSize: PropTypes.number.isRequired,
}

export default TeamParticipants
