import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import MatchSummonerBuild from './MatchSummonerBuild'
import { CCol, CContainer, CRow } from '@coreui/react'
import ParticipantItems from './ParticipantItems' // Import the ParticipantItems component

const MatchDetail = () => {
  // Extract the state data from the location
  const location = useLocation()
  const { state } = location
  if (!state) {
    return <div>No match data available</div>
  }

  const { match, number } = state
  const { gameId, participants } = match

  return (
    <CContainer>
      <h2>Match Details</h2>
      <p>Game ID: {gameId}</p>
      <CRow>
        {/* Column 1 */}
        <CCol>
          <h3>Team 1</h3>
          {participants.slice(0, 5).map((participantPlayer, index) => (
            <React.Fragment key={participantPlayer}>
              <CRow>
                <MatchSummonerBuild
                  participant={participantPlayer}
                  gameId={gameId}
                  index={index}
                  match={match}
                />
                <ParticipantItems
                  gameId={gameId}
                  index={index}
                  match={match}
                  participant={participantPlayer}
                  color={'success'}
                />
              </CRow>
            </React.Fragment>
          ))}
        </CCol>
        {/* Column 2 */}
        <CCol>
          <h3>Team 2</h3>
          {participants.slice(5, 10).map((participantPlayer, index) => (
            <React.Fragment key={participantPlayer}>
              <CRow>
                <MatchSummonerBuild
                  participant={participantPlayer}
                  gameId={gameId}
                  index={index}
                  match={match}
                />
                <ParticipantItems
                  gameId={gameId}
                  index={index}
                  match={match}
                  participant={participantPlayer}
                  color={'success'}
                />
              </CRow>
            </React.Fragment>
          ))}
        </CCol>
      </CRow>
    </CContainer>
  )
}

MatchDetail.propTypes = {
  // Add prop types here if needed
}

export default MatchDetail
