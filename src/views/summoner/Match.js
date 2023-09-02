import React from 'react'
import PropTypes from 'prop-types'
import { CCol, CContainer, CListGroupItem, CRow } from '@coreui/react'
import { Link } from 'react-router-dom'
import TeamParticipants from '../../components/TeamParticipants'
import MatchSummonerBuild from '../../components/MatchSummonerBuild'
import ParticipantItems from '../../components/ParticipantItems'

const Match = ({ match, summonerName, summonerWon }) => {
  const {
    //gameCreation,
    gameDuration,
    gameId,
    //gameMode,
    //gameName,
    //gameStartTimestamp,
    gameEndTimestamp,
    //gameType,
    //gameVersion,
    //map,
    participants,
    //platform,
    queue,
    teams,
  } = match

  const color = summonerWon ? 'success' : 'danger'

  // Filter participants into two teams
  const team1Participants = participants
    .filter((participant) => participant.team === teams[0].teamId)
    .sort((a, b) => a.participantId - b.participantId)

  const team2Participants = participants
    .filter((participant) => participant.team === teams[1].teamId)
    .sort((a, b) => a.participantId - b.participantId)

  // Function to calculate the time elapsed in hours or days
  const getTimeElapsed = () => {
    const currentTime = Date.now()
    const timeDifference = currentTime - gameEndTimestamp
    const hoursElapsed = Math.floor(timeDifference / (1000 * 60 * 60))
    const daysElapsed = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    return daysElapsed >= 1 ? `${daysElapsed} days ago` : `${hoursElapsed} hours ago`
  }

  // Function to convert seconds to minutes and seconds format
  const formatGameDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = durationInSeconds % 60
    return `${minutes}m ${seconds}s`
  }
  return (
    <CListGroupItem color={color} className="p-1">
      {participants.map(
        (participant, index) =>
          participant.summonerName === summonerName && (
            <CContainer key={index}>
              <CRow>
                <CCol sm="auto">
                  <Link
                    state={{ match: match, number: index }}
                    to={`/matchDetail/?${gameId}#participant${index}`}
                    key={gameId}
                    className="text-decoration-none text-black"
                  >
                    <CRow className="justify-content-around">
                      <CRow>
                        <span style={{ whiteSpace: 'pre' }} className="p-0">
                          {summonerWon ? 'WIN ' : 'LOSE'}
                        </span>
                      </CRow>
                      <CRow>
                        <span className="px-0" style={{ width: '200px' }}>
                          Game Mode:
                          {queue.replace('TEAM_BUILDER_', '').replace('_SR', '').replace('_', ' ')}
                        </span>
                      </CRow>
                    </CRow>
                    <CRow className="justify-content-around">
                      <CRow>{formatGameDuration(match.gameDuration)}</CRow>
                      <CRow>{getTimeElapsed()}</CRow>
                    </CRow>
                  </Link>
                </CCol>
                <MatchSummonerBuild
                  key={participant}
                  participant={participant}
                  gameId={gameId}
                  index={index}
                  match={match}
                  singleMatch={true}
                />
                <ParticipantItems
                  key={gameId}
                  gameId={gameId}
                  index={index}
                  match={match}
                  participant={participant}
                  color={color}
                />
                <CCol className="p-0">
                  <CContainer>
                    <CRow className="justify-content-start flex-nowrap">
                      <CCol>
                        {/* Display Team 1 Participants using TeamParticipants component */}
                        <TeamParticipants participants={team1Participants} imageSize={30} />
                      </CCol>
                      <CCol>
                        {/* Display Team 2 Participants using TeamParticipants component */}
                        <TeamParticipants participants={team2Participants} imageSize={30} />
                      </CCol>
                    </CRow>
                  </CContainer>
                </CCol>{' '}
                {/* Display other participant attributes */}
              </CRow>
            </CContainer>
          ),
      )}
    </CListGroupItem>
  )
}

Match.propTypes = {
  match: PropTypes.shape({
    //gameCreation: PropTypes.number.isRequired,
    gameDuration: PropTypes.number.isRequired,
    gameId: PropTypes.number.isRequired,
    //gameMode: PropTypes.string.isRequired,
    //gameName: PropTypes.string.isRequired,
    //gameStartTimestamp: PropTypes.number.isRequired,
    gameEndTimestamp: PropTypes.number.isRequired,
    //gameType: PropTypes.string.isRequired,
    //gameVersion: PropTypes.string.isRequired,
    //map: PropTypes.string.isRequired,
    participants: PropTypes.arrayOf(PropTypes.object).isRequired,
    //platform: PropTypes.string.isRequired,
    queue: PropTypes.string.isRequired,
    teams: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  summonerName: PropTypes.string.isRequired,
  summonerWon: PropTypes.bool.isRequired,
}

export default Match
