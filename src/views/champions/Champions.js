import React, { useState, useEffect } from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'
import { Link } from 'react-router-dom'

const Champions = () => {
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

  let content = []
  for (let i = 0; i < listItems.length; i + 8) {
    let listEightChampions = listItems.splice(i, i + 8)
    content.push(extracted(listEightChampions, i))
  }
  return content
}

function extracted(listEightChampions, iteration) {
  return (
    <>
      <CListGroup layout="horizontal" key={iteration}>
        {listEightChampions.map((item, index) => {
          const imagePath = `/assets/images/champions/${item.image}`
          return (
            <CListGroupItem key={item.name}>
              <Link
                to={`/champion/?champ=${item.name}`}
                state={{ itemName: item.name }}
                key={`link${item.name}`}
              >
                <p className="m-0 text-center text-decoration-none text-black">{item.name} </p>
                <img key={item.name} src={process.env.PUBLIC_URL + imagePath} alt={item.image} />
              </Link>
            </CListGroupItem>
          )
        })}
      </CListGroup>
    </>
  )
}

export default Champions
