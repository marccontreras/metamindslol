import React, { useState, useEffect } from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'
import { Link } from 'react-router-dom'

const Champions = () => {
  const [listChampions, setlistChampions] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/champions')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then((data) => setlistChampions(data))
      .catch((error) => console.error(error))
  }, [])

  let content = []
  for (let i = 0; i < listChampions.length; i + 8) {
    let listEightChampions = listChampions.splice(i, i + 8)
    content.push(renderChampionsRow(listEightChampions, i))
  }
  return content
}

function renderChampionsRow(listEightChampions, iteration) {
  return (
    <>
      <CListGroup layout="horizontal" key={iteration}>
        {listEightChampions.map((champion, index) => {
          const imagePath = `/assets/images/champions/${champion.image}`
          return (
            <CListGroupItem key={champion.name}>
              <Link
                to={`/champion/?champ=${champion.name}`}
                state={{ itemName: champion.name }}
                key={`link${champion.name}`}
              >
                <p className="m-0 text-center text-decoration-none text-black">{champion.name} </p>
                <img
                  key={champion.name}
                  src={process.env.PUBLIC_URL + imagePath}
                  alt={champion.image}
                />
              </Link>
            </CListGroupItem>
          )
        })}
      </CListGroup>
    </>
  )
}

export default Champions
