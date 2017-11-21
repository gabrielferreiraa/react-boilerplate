import React from 'react'
import styled from 'styled-components'
import { widths } from 'utils/globals'

const StyledMain = styled.main`
    margin-left: ${widths.sidebar}px;
    padding: 15px;
`

const Main = ({ children }) => (
  <StyledMain>
    {children}
  </StyledMain>
)

export default Main
