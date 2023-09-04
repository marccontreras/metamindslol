// MatchSummonerBuild.js
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ParticipantKda from './ParticipantKda'

const MatchSummonerBuild = (props) => {
  if (props.singleMatch) {
    return (
      <CCol sm="auto">
        <CRow>
          <CCol className="p-0" sm="auto">
            <Link
              to={`/champion/?champ=${
                props.participant.championName === 'FiddleSticks'
                  ? 'Fiddlesticks'
                  : props.participant.championName
              }`}
              state={{ itemName: props.participant.championId }}
            >
              <img
                style={{ height: '90px', width: '90px' }}
                className="p-0"
                src={`/assets/images/champions/${
                  props.participant.championName === 'FiddleSticks'
                    ? 'Fiddlesticks'
                    : props.participant.championName
                }.png`}
                alt={props.participant.championId}
              />
            </Link>
          </CCol>
          <CCol sm="auto">
            <Link
              to={`/matchDetail/?${props.gameId}#participant${props.index}`}
              state={{
                match: props.match,
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
  } else {
    return (
      <>
        <CCol sm="auto">
          <CRow>
            <CCol className="px-2">
              <Link
                to={`/champion/?champ=${
                  props.participant.championName === 'FiddleSticks'
                    ? 'Fiddlesticks'
                    : props.participant.championName
                }`}
                state={{ itemName: props.participant.championId }}
              >
                <img
                  style={{ height: '90px', width: '90px' }}
                  src={`/assets/images/champions/${
                    props.participant.championName === 'FiddleSticks'
                      ? 'Fiddlesticks'
                      : props.participant.championName
                  }.png`}
                  alt={props.participant.championId}
                />
              </Link>
            </CCol>
            <CCol style={{ height: '45px', width: '45px' }} className="p-0">
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
            </CCol>
            <CCol style={{ width: '115px', padding: 0 }}>
              <ParticipantKda
                participant={props.participant}
                summonerNameFromMatchDetail={props.participant.summonerName}
              />
            </CCol>
          </CRow>
        </CCol>
      </>
    )
  }
}

MatchSummonerBuild.propTypes = {
  participant: PropTypes.object.isRequired,
  gameId: PropTypes.any.isRequired,
  index: PropTypes.any.isRequired,
  match: PropTypes.any.isRequired,
  singleMatch: PropTypes.bool.isRequired,
}

export default MatchSummonerBuild
