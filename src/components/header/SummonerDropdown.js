import React from 'react'
import PropTypes from 'prop-types'
import { CBadge, CContainer, CDropdownItem, CDropdownMenu } from '@coreui/react'
import { Link } from 'react-router-dom'

const SummonerDropdown = ({ summoners }) => {
  return (
    <CDropdownMenu className="pt-0 w-100" placement="bottom-end">
      {summoners &&
        summoners.map((summoner, index) => (
          <CDropdownItem className="w-100" key={index}>
            <Link
              className="min-vw-100"
              to={`/summoner/?summonerName=${summoner.name}`}
              state={{ summonerName: summoner.name, summonerPlatform: summoner.platform }}
              key={`link${summoner.name}`}
            >
              <CContainer>
                <img
                  style={{ height: '50px' }}
                  className="ms-2"
                  src={'/assets/images/profileicon/' + summoner.profileIconId + '.png'}
                  alt={summoner.profileIconId}
                />
                {summoner.name && (
                  <CBadge color="danger" className="ms-2">
                    {summoner.name}
                  </CBadge>
                )}
              </CContainer>
            </Link>
          </CDropdownItem>
        ))}
    </CDropdownMenu>
  )
}

SummonerDropdown.propTypes = {
  summoners: PropTypes.arrayOf(
    PropTypes.shape({
      profileIconId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      summonerLevel: PropTypes.number.isRequired,
      accountId: PropTypes.string.isRequired,
      puuid: PropTypes.string.isRequired,
      summonerId: PropTypes.string.isRequired,
      revisionDate: PropTypes.number.isRequired,
      platform: PropTypes.string.isRequired,
    }),
  ),
}

export default SummonerDropdown
