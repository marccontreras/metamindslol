import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { isNumber } from 'chart.js/helpers'
import { CCol, CRow } from '@coreui/react'
import parse from 'html-react-parser'

//en el futur mirar de passar en el champion un props que sigui el nom del campio
const Champion = () => {
  const location = useLocation()
  const itemName = location.state && location.state.itemName
  const [champion, setChampion] = useState([])

  useEffect(() => {
    let path = 'http://localhost:8080/champions/champion/'
    if (isNumber(itemName)) {
      path = 'http://localhost:8080/champions/'
    }
    fetch(path + itemName)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then((data) => setChampion(data))
      .catch((error) => console.error(error))
  }, [itemName])
  return (
    <div>
      <h1>Champion Details</h1>
      <CRow className="align-items-center pb-2">
        <CCol sm="auto">
          <img
            src={
              'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/' +
              champion.key +
              '.png'
            }
            alt={itemName}
          />
        </CCol>
        <CCol>
          <h1>{champion.name}</h1>
        </CCol>
      </CRow>
      {champion.passive ? (
        <div>
          <span>
            <strong>{champion.passive.name}</strong>
          </span>
          <CRow className="align-items-center pb-2">
            <CCol sm="auto">
              <img
                key={champion.passive.image.full}
                src={
                  'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/passive/' +
                  champion.passive.image.full
                }
                alt={champion.passive.image.full}
              />
            </CCol>
            <CCol>
              {parse(
                champion.passive.description
                  .replace('<br><br>', '<br>')
                  .replace('\\n\\n', '<br>')
                  .replace('.\\n\\n', '.<br>'),
              )}
            </CCol>
          </CRow>
        </div>
      ) : (
        ''
      )}

      {champion.spells
        ? champion.spells.map((spell) => (
            <div key={spell.image.full}>
              <span key={spell.name}>
                {' '}
                <strong>{spell.name}</strong>
              </span>
              <CRow className="align-items-center pb-2">
                <CCol sm="auto">
                  <img
                    key={spell.image.full}
                    src={
                      'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/spell/' +
                      spell.image.full
                    }
                    alt={spell.image.full.split('.')[0]}
                  />
                </CCol>
                <CCol>
                  {parse(
                    spell.description
                      .replace('<br><br>', '<br>')
                      .replace('\\n\\n', '<br>')
                      .replace('.\\n\\n', '.<br>'),
                  )}
                </CCol>
              </CRow>
            </div>
          ))
        : ''}
    </div>
  )
}

export default Champion
