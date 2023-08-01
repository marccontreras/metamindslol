// ParticipantItems.js
import React from 'react'
import { CCol, CListGroup } from '@coreui/react'
import { Link } from 'react-router-dom'
import ParticipantItem from './ParticipantItem'
import PropTypes from 'prop-types'

function ParticipantItems(props) {
  return (
    <CCol sm="auto">
      <Link
        to={`/matchDetail/?${props.gameId}#participant${props.index}`}
        state={{ match: props.match, participant: props.participant, number: props.index }}
        className="text-decoration-none text-black"
      >
        <CListGroup>
          <CListGroup layout="horizontal">
            <ParticipantItem item={props.participant.item0} color={props.color} />
            <ParticipantItem item={props.participant.item1} color={props.color} />
            <ParticipantItem item={props.participant.item2} color={props.color} />
            <ParticipantItem item={props.participant.item6} color={props.color} />
          </CListGroup>
          <CListGroup layout="horizontal">
            <ParticipantItem item={props.participant.item3} color={props.color} />
            <ParticipantItem item={props.participant.item4} color={props.color} />
            <ParticipantItem item={props.participant.item5} color={props.color} />
          </CListGroup>
        </CListGroup>
      </Link>
    </CCol>
  )
}

// Add PropTypes validation for the props
ParticipantItems.propTypes = {
  gameId: PropTypes.any.isRequired,
  index: PropTypes.any.isRequired,
  match: PropTypes.any.isRequired,
  participant: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
}
export default ParticipantItems
