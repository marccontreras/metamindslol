import React, { useState, useEffect } from 'react'

const ListComponent = () => {
  const [listItems, setListItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/champions')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then((data) => setListItems(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <ul>
        {listItems.map((item, index) => {
          const imagePath = `/assets/images/champions/${item.image}`

          return (
            <li key={index}>
              {item.name} - <img src={process.env.PUBLIC_URL + imagePath} alt={item.image} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ListComponent
