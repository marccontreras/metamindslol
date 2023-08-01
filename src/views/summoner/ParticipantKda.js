// ParticipantKda.js
import React from 'react'
import { CRow } from '@coreui/react'

function ParticipantKda(props) {
  return (
    <CRow className="justify-content-center">
      <CRow>
        {props.participant.kills}/{props.participant.deaths}/{props.participant.assists}
      </CRow>
      <CRow>
        {props.participant.deaths === 0
          ? 'Perfect KDA'
          : `${((props.participant.kills + props.participant.assists) / props.participant.deaths).toFixed(2)} KDA`}
      </CRow>
    </CRow>
  )
}

export default ParticipantKda;
