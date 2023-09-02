import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const TeamParticipants = ({ participants, imageSize, participant }) => {
  const navigate = useNavigate()

  const fetchSummoner = (selectedParticipant) => {
    // Get the summoner name of the clicked participant
    const summonerName = selectedParticipant.summonerName

    // Make the API call here using the search query
    fetch(`http://localhost:8080/summoners/EUW1/${summonerName}`)
      .then((response) => response.json())
      .then((data) => {
        if (data !== 'Summoner not found') {
          // If summoner data is fetched successfully, navigate to the summoner page
          navigate(`/summoner/?summonerName=${summonerName}`, { state: { summoner: data } })
        } else {
          // Handle case when summoner is not found
          console.error('Summoner not found')
        }
      })
      .catch((error) => console.error('Error fetching summoner data:', error))
  }
  function fillStringWithSpaces(toFormat, desiredLength) {
    let amountToFill = (desiredLength - toFormat.length) / 2
    let halfFormatted = toFormat.padStart(toFormat.length + amountToFill, ' ')

    if (desiredLength % 2 !== 0) {
      halfFormatted = toFormat.padStart(toFormat.length + amountToFill + 1, ' ')
    }

    const formattedKda = halfFormatted.padEnd(desiredLength, ' ')
    console.log(formattedKda + ' length: ' + formattedKda.length)
    return formattedKda
  }

  if (participants) {
    return (
      <>
        {participants.map((participant, index) => (
          <div key={index} className="d-flex">
            <img
              style={{ height: imageSize, width: imageSize }}
              className="ms-2 p-1"
              key={participant.championId}
              src={`/assets/images/champions/${participant.championName}.png`}
              alt={participant.championId}
            />
            <span
              className="ms-2"
              style={{ cursor: 'pointer', whiteSpace: 'pre', width: '150px' }}
              onClick={() => fetchSummoner(participant)}
            >
              {participant.summonerName}
            </span>
          </div>
        ))}
      </>
    )
  } else if (participant) {
    return (
      <div key={participant.summonerName} className="d-flex align-items-center px-1">
        <span
          style={{ cursor: 'pointer', whiteSpace: 'pre' }}
          onClick={() => fetchSummoner(participant)}
        >
          {fillStringWithSpaces(participant.summonerName, 16)}
        </span>
      </div>
    )
  } else {
    return <div>No participant is being given</div> // Return null if both participants and participant are not provided
  }
}

TeamParticipants.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.object),
  imageSize: PropTypes.number,
  participant: PropTypes.object,
}

export default TeamParticipants
