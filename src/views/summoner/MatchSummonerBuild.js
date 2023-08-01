// MatchSummonerBuild.js
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ParticipantKda(props: { participant: Object }) {
  return (
    <CRow className="justify-content-center">
      <CRow>
        {props.participant.kills}/{props.participant.deaths}/{props.participant.assists}
      </CRow>
      <CRow>
        {props.participant.deaths === 0
          ? 'Perfect KDA'
          : `${(
              (props.participant.kills + props.participant.assists) /
              props.participant.deaths
            ).toFixed(2)} KDA`}
      </CRow>
    </CRow>
  )
}

const MatchSummonerBuild = (props) => {
  return (
    <CCol sm="auto">
      <CRow>
        <CCol className="p-0" sm="auto">
          <Link
            to={`/champion/?champ=${props.participant.championName}`}
            state={{ itemName: props.participant.championId }}
          >
            <img
              style={{ height: '90px', width: '90px' }}
              className="p-0"
              src={`/assets/images/champions/${props.participant.championName}.png`}
              alt={props.participant.championId}
            />
          </Link>
        </CCol>
        <CCol>
          <Link
            to={`/matchDetail/?${props.gameId}#participant${props.index}`}
            state={{
              match: props.match,
              participant: props.participant,
              number: props.index,
            }}
            className="text-decoration-none text-black"
          >
            <CRow>
              <img
                style={{ height: '45px', width: '45px' }}
                className="p-0"
                src={`/assets/images/spell/${props.participant.summonerSpell1}.png`}
                alt={props.participant.summonerSpell1}
              />
            </CRow>
            <CRow>
              <img
                style={{ height: '45px', width: '45px' }}
                className="p-0"
                src={`/assets/images/spell/${props.participant.summonerSpell2}.png`}
                alt={props.participant.summonerSpell2}
              />
            </CRow>
          </Link>
        </CCol>
      </CRow>
      <ParticipantKda participant={props.participant} />
    </CCol>
  )
}

MatchSummonerBuild.propTypes = {
  participant: PropTypes.object.isRequired,
  gameId: PropTypes.any.isRequired,
  index: PropTypes.any.isRequired,
  match: PropTypes.any.isRequired,
}

export default MatchSummonerBuild
