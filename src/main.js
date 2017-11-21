import React from 'react'
import styled from 'styled-components'
import { widths } from 'utils/globals'

import { connect } from 'react-redux'

const StyledMain = styled.main`
    transform: ${props => props.open ? 'translateX(' + widths.sidebar + 'px)' : 'translateX(70px)'};
    padding: 15px;
    transition: transform 300ms ease;
    will-change: transform;
`

const Main = ({ children, ...props }) => (
  <StyledMain open={props.open}>
    {children}
  </StyledMain>
  )

const mapStateToProps = state => ({ open: state.sidebar.open })
export default connect(mapStateToProps, null)(Main)
