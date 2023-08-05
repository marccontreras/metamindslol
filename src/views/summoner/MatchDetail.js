import React from 'react'
import { CCol, CContainer, CRow } from '@coreui/react'
import { useLocation } from 'react-router-dom'
import MatchSummonerBuild from './MatchSummonerBuild'
import ParticipantItems from './ParticipantItems'
import { CChart } from '@coreui/react-chartjs'

const MatchDetail = () => {
  const location = useLocation()
  const { state } = location
  if (!state) {
    return <div>No match data available</div>
  }

  const { match, participantNumber } = state
  const { gameId, participants } = match

  function getFragment(participantPlayer, index) {
    return (
      <React.Fragment key={participantPlayer}>
        <CRow className="pb-1 pt-1">
          <MatchSummonerBuild
            participant={participantPlayer}
            gameId={gameId}
            index={index}
            match={match}
            singleMatch={false}
          />
          <ParticipantItems
            gameId={gameId}
            index={index}
            match={match}
            participant={participantPlayer}
            color={'success'}
            matchDetail={true}
          />
        </CRow>
      </React.Fragment>
    )
  }

  const chartData = {
    labels: participants.map((participant) => participant.championName),
    datasets: [
      {
        label: 'Champion Damage Dealt To Champions',
        data: participants.map((participant) => participant.totalDamageDealtToChampions),
        backgroundColor: participants.map((participant) =>
          participant.team === 'BLUE' ? '#7986f8' : '#f87979',
        ),
      },
      {
        label: 'Physical Damage Dealt To Champions',
        data: participants.map((participant) => participant.physicalDamageDealtToChampions),
        backgroundColor: participants.map((participant) =>
          participant.team === 'BLUE' ? '#7986f8' : '#f87979',
        ),
        hidden: true, // Hide this dataset initially
      },
      {
        label: 'Magical Damage Dealt To Champions',
        data: participants.map((participant) => participant.magicDamageDealtToChampions),
        backgroundColor: participants.map((participant) =>
          participant.team === 'BLUE' ? '#7986f8' : '#f87979',
        ),
        hidden: true, // Hide this dataset initially
      },
      {
        label: 'True Damage Dealt To Champions',
        data: participants.map((participant) => participant.trueDamageDealtToChampions),
        backgroundColor: participants.map((participant) =>
          participant.team === 'BLUE' ? '#7986f8' : '#f87979',
        ),
        hidden: true, // Hide this dataset initially
      },
    ],
  }

  return (
    <CContainer>
      <h2>Match Details</h2>
      <p>Game ID: {gameId}</p>
      <CRow>
        <CCol>
          <h3>Team 1</h3>
          {participants
            .slice(0, 5)
            .map((participantPlayer, index) => getFragment(participantPlayer, index))}
        </CCol>
        <CCol>
          <h3>Team 2</h3>
          {participants
            .slice(5, 10)
            .map((participantPlayer, index) => getFragment(participantPlayer, index))}
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CChart type="bar" data={chartData} />
        </CCol>
      </CRow>
    </CContainer>
  )
}

MatchDetail.propTypes = {
  // Add prop types here if needed
}

export default MatchDetail
