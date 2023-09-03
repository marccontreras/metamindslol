import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  //CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'

//import { AppBreadcrumb } from './index'

import AppSearchBar from './AppSearchBar.tsx'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid className="d-flex justify-content-sm-start">
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="w-75 mx-5">
          <CNavItem className="w-100">
            <AppSearchBar />
          </CNavItem>
        </CHeaderNav>
      </CContainer>
      {/*<CHeaderDivider />*/}
      {/*<CContainer fluid>*/}
      {/*  <AppBreadcrumb />*/}
      {/*</CContainer>*/}
    </CHeader>
  )
}

export default AppHeader
