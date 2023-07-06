import React, { useState, useEffect } from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'
import { Link, Route, Routes } from 'react-router-dom'
import Champion from './Champion'

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
    content.push(extracted(listEightChampions))
  }
  return content
}

function extracted(listEightChampions) {
  return (
    <>
      <CListGroup layout="horizontal">
        {listEightChampions.map((item, index) => {
          const imagePath = `/assets/images/champions/${item.image}`
          return (
            <CListGroupItem key={item.name}>
              {/*<Routes>
                <Route path="/champion" element={<Champion state={{ itemName: item.name }} />} />*/}
              <Link to={`/champion`} state={{ itemName: item.name }}>
                {item.name} - <img src={process.env.PUBLIC_URL + imagePath} alt={item.image} />
              </Link>
              {/*                {item.name} - <img src={process.env.PUBLIC_URL + imagePath} alt={item.image} />
              </Routes>*/}
            </CListGroupItem>
          )
        })}
      </CListGroup>
    </>
  )
}

export default Champions
