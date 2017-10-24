import React from 'react'
import styled from 'styled-components'

const Checkbox = styled.input.attrs({
  type: 'checkbox',
  onChange: p => p.onChange
})`

`
const Label = styled.label`
  margin: 10px 0;
  padding-left: 20px;
  display: block;
`



export default ({cb, children}) =>
  <Label>
    <Checkbox onChange={cb} />{' '}
    {children}
  </Label>