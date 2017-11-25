import React from 'react'
import styled from 'styled-components'
import { widths } from 'utils/globals'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const StyledMain = styled.main`
    background-color: #E9F0F5;
    transform: ${props => props.open ? 'translateX(' + widths.sidebar + 'px)' : 'translateX(70px)'};
    padding: 15px;
    transition: transform 300ms ease;
    will-change: transform;
    height: 100vh;
    width: ${props => props.open ? 'calc(100% - ' + widths.sidebar + 'px)' : 'calc(100% - 64px)'};
`

const Main = ({ children, open }) => (
  <StyledMain open={open}>
    {children}
  </StyledMain>
)

const mapStateToProps = state => ({ open: state.sidebar.open })
export default withRouter(connect(mapStateToProps)(Main))
