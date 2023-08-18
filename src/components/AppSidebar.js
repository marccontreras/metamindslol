import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CContainer, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
//import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

//import { logoNegative } from 'src/assets/brand/logo-negative'
//import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
//import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CContainer className="justify-content-center w-50">
          <img src="/assets/images/brand/logo.png" height={50} alt="metamindslol" />
        </CContainer>
      </CSidebarBrand>
      <CSidebarNav>
        <AppSidebarNav items={navigation} />
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
