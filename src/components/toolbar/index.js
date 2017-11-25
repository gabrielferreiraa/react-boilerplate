import React from 'react'
import styled from 'styled-components'
import { colors } from 'utils/globals'
import { Switch, Radio, Icon } from 'antd'

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

const Toolbar = () => (
  <StyledToolbar>
    <ToolbarTitle>Ajustes Gerais</ToolbarTitle>

    <SectionConfig>
      <ConfigName>Barra Lateral</ConfigName>
      <Switch />
      <Description>
          Diminui o tamanho da barra lateral esquerda
      </Description>
    </SectionConfig>

    <SectionConfig>
      <ConfigName>Seções no Menu</ConfigName>
      <Switch />
      <Description>
          Remove a navegação de seções no menu principal
      </Description>
    </SectionConfig>

    <SectionConfig>
      <ConfigName>Modo de Exibição Menu</ConfigName>
      <Description>
          Troca o modo de visualização dos itens do menu
      </Description>

      <StyledRadioGroup defaultValue='a' size='small'>
        <StyledRadio value='a'>Modo 1</StyledRadio>
        <StyledRadio value='b'>Modo 2</StyledRadio>
      </StyledRadioGroup>
    </SectionConfig>

  </StyledToolbar>
)

export default Toolbar
