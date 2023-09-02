import React from 'react'
import { CRow } from '@coreui/react'
import PropTypes from 'prop-types'
import TeamParticipants from './TeamParticipants'

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

function ParticipantKda(props) {
  const kda =
    props.participant.deaths === 0
      ? 'Perfect KDA'
      : `${(
          (props.participant.kills + props.participant.assists) /
          props.participant.deaths
        ).toFixed(2)} KDA`

  // Calculate the desired length based on "Perfect KDA"
  const desiredLength = 'Perfect KDA'.length

  // Use padStart to add spaces to the beginning of kda string to achieve desired length
  const formattedKda = fillStringWithSpaces(kda, desiredLength)
  if (props.summonerNameFromMatchDetail)
    return (
      <CRow className="justify-content-left">
        <CRow className="p-0 justify-content-center">
          <TeamParticipants participant={props.participant} />
        </CRow>

        <CRow className="p-0 justify-content-center">
          {props.participant.kills}/{props.participant.deaths}/{props.participant.assists}
        </CRow>
        <CRow className="p-0 justify-content-center">{formattedKda}</CRow>
      </CRow>
    )
  else
    return (
      <CRow className="justify-content-left">
        <CRow className="p-0 justify-content-center">
          {props.participant.kills}/{props.participant.deaths}/{props.participant.assists}
        </CRow>
        <CRow className="p-0 justify-content-center">{formattedKda}</CRow>
      </CRow>
    )
}

ParticipantKda.propTypes = {
  participant: PropTypes.shape({
    kills: PropTypes.number.isRequired,
    deaths: PropTypes.number.isRequired,
    assists: PropTypes.number.isRequired,
  }).isRequired,
  summonerNameFromMatchDetail: PropTypes.string,
}

export default ParticipantKda
