import React from 'react'
import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { cilLockLocked } from '@coreui/icons'
import { CListGroupItem } from '@coreui/react'

const ParticipantItem = ({ item, color }) => {
  const shouldRenderImage = item !== 0
  return shouldRenderImage ? (
    <CListGroupItem color={color} className="p-0">
      <img
        style={{ height: '35px' }}
        className="m-1"
        src={`https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/${item}.png`}
        alt={item}
      />
    </CListGroupItem>
  ) : (
    <CListGroupItem color={color} className="p-0">
      <CIcon
        style={{ height: '35px', width: '35px' }}
        className="m-1"
        size="lg"
        icon={cilLockLocked}
      />
    </CListGroupItem>
  )
}

ParticipantItem.propTypes = {
  item: PropTypes.number, // Assuming item is a string representing the item identifier
  color: PropTypes.string,
}

export default ParticipantItem
