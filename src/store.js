import { createStore } from 'redux'
//import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

// if I must use redux, be sure to change to configure
//const store = configureStore(changeState)
const store = createStore(changeState)
export default store
