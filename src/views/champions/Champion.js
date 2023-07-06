import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Champion = () => {
  const location = useLocation()
  const itemName = location.state && location.state.itemName
  const [champion] = useState([])
  /*
    useEffect(() => {
      fetch(`http://localhost:8080/champion/${itemName}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch data')
          }
          return response.json()
        })
        .then((data) => champion(data))
        .catch((error) => console.error(error))
    }, [])
  */
  return (
    <div>
      <h1>Champion Details</h1>
      {itemName && <p>Item Name: {itemName}</p>}
      {/* Render the rest of the champion details */}
    </div>
  )
}

export default Champion
