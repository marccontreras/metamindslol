import React from 'react'
import PropTypes from 'prop-types'
import { CBadge, CContainer, CDropdownItem, CDropdownMenu } from '@coreui/react'
import { Link } from 'react-router-dom'

const SummonerDropdown = ({ summoner }) => {
  return (
    <Link
      className="min-vw-100"
      to={`/summoner/?summonerName=${summoner.name}`}
      state={{ summoner: summoner }} // Pass the whole summoner object as the state
      key={`link${summoner.name}`}
    >
      <CContainer>
        <img
          style={{ height: '50px' }}
          className="ms-2"
          src={
            'https://ddragon.leagueoflegends.com/cdn/13.17.1/img/profileicon/' +
            summoner.profileIconId +
            '.png'
          }
          alt={summoner.profileIconId}
        />
        {summoner.name && (
          <CBadge color="danger" className="ms-2">
            {summoner.name}
          </CBadge>
        )}
      </CContainer>
    </Link>
  )
}

SummonerDropdown.propTypes = {
  summoner: PropTypes.shape({
    profileIconId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    summonerLevel: PropTypes.number.isRequired,
    accountId: PropTypes.string.isRequired,
    puuid: PropTypes.string.isRequired,
    summonerId: PropTypes.string.isRequired,
    revisionDate: PropTypes.number.isRequired,
    platform: PropTypes.string.isRequired,
  }),
}

export default SummonerDropdown
