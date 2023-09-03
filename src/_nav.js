import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilGroup, cilHome, cilList } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { isArray } from 'chart.js/helpers'

const fetchChampions = async () => {
  try {
    const response = await fetch('http://localhost:8080/champions')
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}

const generateChampionNavItems = async () => {
  const champions = await fetchChampions()
  console.log(champions)
  let array = champions.map((champion) => ({
    component: CNavItem,
    name: champion.name,
    to: `/champion/?champ=${champion.name}`,
    state: { itemName: champion.name },
  }))
  console.log(array)
  if (isArray(array)) console.log('es array')
  return array
}

const _nav = [
  /* {
     component: CNavItem,
     name: 'Dashboard',
     to: '/dashboard',
     icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
     badge: {
       color: 'info',
       text: 'NEW',
     },
   },
 */ {
    component: CNavTitle,
    name: 'Navigation Menu',
  },
  {
    component: CNavItem,
    name: 'Home',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Champions',
    to: '/champions',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Champion List',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    items: await generateChampionNavItems(),
  },
]

export default _nav
