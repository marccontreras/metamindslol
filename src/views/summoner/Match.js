import React from 'react'
import PropTypes from 'prop-types'

const Match = ({ match }) => {
  const {
    gameCreation,
    gameDuration,
    gameId,
    gameMode,
    gameName,
    gameStartTimestamp,
    gameEndTimestamp,
    gameType,
    gameVersion,
    map,
    participants,
    platform,
    queue,
    teams,
  } = match

  return (
    <div>
      <h2>Match Details</h2>
      <p>Game ID: {gameId}</p>
      <p>Game Mode: {gameMode}</p>
      <p>Game Name: {gameName}</p>
      <p>Game Type: {gameType}</p>
      <p>Game Version: {gameVersion}</p>
      <p>Platform: {platform}</p>
      <p>Map: {map}</p>
      <p>Queue: {queue}</p>
      <p>Game Creation: {gameCreation}</p>
      <p>Game Duration: {gameDuration}</p>
      <p>Game Start Timestamp: {gameStartTimestamp}</p>
      <p>Game End Timestamp: {gameEndTimestamp}</p>

      <h3>Participants</h3>
      {participants.map((participant) => (
        <div key={participant.id}>
          <p>Participant ID: {participant.id}</p>
          <p>Participant name: {participant.summonerName}</p>
          <p>Champion ID: {participant.championId}</p>
          <p>Champion name: {participant.championName}</p>
          {/* Display other participant attributes */}
        </div>
      ))}

      <h3>Teams</h3>
      {teams.map((team) => (
        <div key={team.id}>
          <p>Team ID: {team.id}</p>
          {/* Display other team attributes */}
        </div>
      ))}
    </div>
  )
}

Match.propTypes = {
  match: PropTypes.shape({
    gameCreation: PropTypes.number.isRequired,
    gameDuration: PropTypes.number.isRequired,
    gameId: PropTypes.number.isRequired,
    gameMode: PropTypes.string.isRequired,
    gameName: PropTypes.string.isRequired,
    gameStartTimestamp: PropTypes.number.isRequired,
    gameEndTimestamp: PropTypes.number.isRequired,
    gameType: PropTypes.string.isRequired,
    gameVersion: PropTypes.string.isRequired,
    map: PropTypes.string.isRequired,
    participants: PropTypes.arrayOf(PropTypes.object).isRequired,
    platform: PropTypes.string.isRequired,
    queue: PropTypes.string.isRequired,
    teams: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
}

export default Match
