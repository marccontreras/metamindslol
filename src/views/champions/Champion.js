import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { isNumber } from 'chart.js/helpers'

//en el futur mirar de passar en el champion un props que sigui el nom del campio
const Champion = () => {
  const location = useLocation()
  const itemName = location.state && location.state.itemName
  const [champion, setChampion] = useState([])
  let path = 'http://localhost:8080/champions/champion/'

  useEffect(() => {
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
  }, [])
  console.log(champion)
  console.log('item name')
  console.log(itemName)
  return (
    <div>
      <h1>Champion Details</h1>
      <img src={'/assets/images/champions/' + champion.key + '.png'} alt={itemName} />
      {itemName && <p>Item Name: {itemName}</p>}

      {champion.passive ? (
        <div>
          <p>{champion.passive.name}</p>
          <img
            key={champion.passive.image.full}
            src={'/assets/images/passive/' + champion.passive.image.full}
            alt={champion.passive.image.full}
          />
        </div>
      ) : (
        ''
      )}

      {champion.spells
        ? champion.spells.map((spell) => (
            <div key={spell.image.full}>
              <p key={spell.name}> {spell.name}</p>
              <img
                key={spell.image.full}
                src={'/assets/images/spell/' + spell.image.full}
                alt={spell.image.full.split('.')[0]}
              />
            </div>
          ))
        : ''}
    </div>
  )
}

export default Champion
