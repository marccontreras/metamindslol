import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

//en el futur mirar de passar en el champion un props que sigui el nom del campio
const Champion = () => {
  const location = useLocation()
  const itemName = location.state && location.state.itemName
  const [champion, setChampion] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/champions/champion/${itemName}`)
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
  return (
    <div>
      <h1>Champion Details</h1>
      <img src={'/assets/images/champions/' + champion.key + '.png'} alt={itemName} />
      {itemName && <p>Item Name: {itemName}</p>}

      {<p>{champion.passive.name}</p>}
      {
        <img
          key={champion.passive.image.full}
          src={'/assets/images/passive/' + champion.passive.image.full}
          alt={champion.passive.image.full}
        />
      }
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
