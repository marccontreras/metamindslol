import React from 'react' // Import useState and useEffect
import { CCol, CContainer, CListGroup, CListGroupItem, CRow } from '@coreui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import MatchSummonerBuild from '../../components/MatchSummonerBuild'
import ParticipantItems from '../../components/ParticipantItems'
import { CChart } from '@coreui/react-chartjs'
import ChartComponent from '../../components/ChartComponent'

const MatchDetail = () => {
  const location = useLocation()
  const { state } = location

  const { match, number } = state
  const { gameId, participants } = match

  // Get the participant whose index matches the number attribute
  const selectedParticipant = participants[number]
  var enemyParticipant = number >= 5 ? participants[number - 5] : participants[number + 5]
  const navigate = useNavigate()

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
    labels: participants.map((participant) =>
      participant.championName === 'FiddleSticks' ? 'Fiddlesticks' : participant.championName,
    ),
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
      {/*<p>Game ID: {gameId}</p>*/}
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
      <CListGroup className={'mt-3 justify-content-center'} layout={'horizontal'}>
        {participants.map((participant, index) => (
          <CListGroupItem
            key={index}
            className="d-flex align-items-center p-0"
            style={index === number ? { border: '2px solid #7986f8' } : {}}
          >
            <img
              src={`/assets/images/champions/${
                participant.championName === 'FiddleSticks'
                  ? 'Fiddlesticks'
                  : participant.championName
              }.png`}
              alt={
                participant.championName === 'FiddleSticks'
                  ? 'Fiddlesticks'
                  : participant.championName
              }
              style={{
                width: '50px',
                height: '50px',
                ...(index === number ? { border: '2px solid #7986f8' } : {}),
              }}
              onClick={() => {
                navigate(`/matchDetail/?${gameId}#participant${index}`, {
                  state: { match, number: index }, // Update the 'number' in the state
                })
              }}
            />
          </CListGroupItem>
        ))}
      </CListGroup>
      {/*one for wards placed, seems like the rest will be implemented through the timelineMatch*/}
      <CRow>
        <div className="d-flex flex-wrap">
          <CRow className="w-100">
            <ChartComponent
              data1={selectedParticipant.kills}
              data2={enemyParticipant.kills}
              label1={selectedParticipant.championName}
              label2={enemyParticipant.championName}
              title="Total Kills"
            />
            <ChartComponent
              data1={selectedParticipant.goldEarned}
              data2={enemyParticipant.goldEarned}
              label1={selectedParticipant.championName}
              label2={enemyParticipant.championName}
              title="Gold obtained"
            />
            <ChartComponent
              data1={
                selectedParticipant.totalMinionsKilled + selectedParticipant.neutralMinionsKilled
              }
              data2={enemyParticipant.totalMinionsKilled + enemyParticipant.neutralMinionsKilled}
              label1={selectedParticipant.championName}
              label2={enemyParticipant.championName}
              title="total CS"
            />
          </CRow>

          <CRow className="w-100">
            <ChartComponent
              data1={selectedParticipant.visionScore}
              data2={enemyParticipant.visionScore}
              label1={selectedParticipant.championName}
              label2={enemyParticipant.championName}
              title="Vision Score"
            />
            <ChartComponent
              data1={selectedParticipant.totalDamageTaken}
              data2={enemyParticipant.totalDamageTaken}
              label1={selectedParticipant.championName}
              label2={enemyParticipant.championName}
              title="Damage taken"
            />
            <ChartComponent
              data1={selectedParticipant.damageDealtToTurrets}
              data2={enemyParticipant.damageDealtToTurrets}
              label1={selectedParticipant.championName}
              label2={enemyParticipant.championName}
              title="Damage dealt to turrets"
            />
          </CRow>
        </div>
      </CRow>
    </CContainer>
  )
}

MatchDetail.propTypes = {
  // Add prop types here if needed
}

export default MatchDetail
