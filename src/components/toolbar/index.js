import React from 'react'
import styled from 'styled-components'
import { colors } from 'utils/globals'
import { Switch, Radio } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeMode, changeTheme, toggle } from 'reducers/sidebar/action-creators'

const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const StyledToolbar = styled.nav`
    width: 240px;
    position: absolute;
    right: 0;
    height: 100%;
    background-color: ${colors.white};
    padding: 15px;
    color: ${colors.secondary};
    margin-top: 1px;
    z-index: 1;
    transform: ${props => props.open ? 'none' : 'translateX(240px)'};
    opacity: ${props => props.open ? '1' : '0'};
    transition: transform 150ms ease;
`

const ToolbarTitle = styled.h2`
    font-weight: bold;
    font-size: 1.3em;
    margin-bottom: 20px;
`
const ConfigName = styled.span`
    display: flex;
    align-items: center;
`

const SectionConfig = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 25px;
`

const Description = styled.p`
    width: 100%;
    color: rgba(0, 0, 0, .4);
    margin-top: 5px;
`

const StyledRadio = styled(RadioButton)`
    height: 70px !important;
    width: 70px !important;
    font-size: 1.2em;
    display: flex !important;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const StyledRadioGroup = styled(RadioGroup)`
    margin-top: 5px;
    width: 100%;
    display: flex !important;
    justify-content: center;
`

const backgroundColorDark = colors.secondary + ' !important'
const colorDark = colors.white + ' !important'
const StyledRadioTheme = styled(RadioButton)`
    background-color: ${props => props.dark ? backgroundColorDark : 'initial'};
    color: ${props => props.dark ? colorDark : 'initial'};
`

const Toolbar = props => {
  const {
      sidebarOpen,
      theme,
      mode,
      toggle,
      changeMode,
      changeTheme,
      toolbarOpen
    } = props

  return (
    <StyledToolbar open={toolbarOpen}>
      <ToolbarTitle>Ajustes Gerais</ToolbarTitle>

      <SectionConfig>
        <ConfigName>Barra Lateral</ConfigName>
        <Switch onChange={toggle} defaultChecked={sidebarOpen} />
        <Description>
            Diminui o tamanho da barra lateral esquerda
        </Description>
      </SectionConfig>

      <SectionConfig>
        <ConfigName>Modo de Exibição Menu</ConfigName>
        <Description>
            Troca o modo de visualização dos itens do menu
        </Description>

        <StyledRadioGroup
          defaultValue={mode}
          size='small'
          onChange={e => changeMode(e.target.value)}
          disabled={!sidebarOpen}
        >
          <StyledRadio value='inline'>Modo 1</StyledRadio>
          <StyledRadio value='vertical'>Modo 2</StyledRadio>
        </StyledRadioGroup>
      </SectionConfig>

      <SectionConfig>
        <ConfigName>Tema</ConfigName>
        <Description>
            Muda o tema do menu lateral esquerdo
        </Description>

        <StyledRadioGroup
          defaultValue={theme}
          onChange={e => changeTheme(e.target.value)}
        >
          <StyledRadioTheme value='light'>Claro</StyledRadioTheme>
          <StyledRadioTheme value='dark' dark>Escuro</StyledRadioTheme>
        </StyledRadioGroup>
      </SectionConfig>

    </StyledToolbar>
  )
}

const mapStateToProps = ({ sidebar, toolbar }) => ({
  sidebarOpen: sidebar.open,
  mode: sidebar.mode,
  theme: sidebar.theme,
  toolbarOpen: toolbar.open
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeMode,
  changeTheme,
  toggle
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
