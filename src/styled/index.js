import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html,
  body {
    box-sizing: border-box;
    font-size: 100%;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
  }
  #root {
    background-color: #f3f7fa;
    border-top: 1px solid #fff0;
  }
`

export const Container = styled.div`
  max-width: 70%;
  margin: 0 auto;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

export const Card = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: stretch;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px 0;
  background-color: #fff;
`

const Col = styled.div`
  padding: 0 15px;
`

export const Col70 = Col.extend`
  flex: 0 0.00000001 70%;
`
export const Col30 = Col.extend`
  flex: 0 0.00000001 30%;
`

export const Left = styled.div`
  flex: 0 0 200px;
  border-right: 1px solid #ccc;
  padding: 30px 20px;
`

export const Right = styled.div`
  flex: 1 1 auto;
  padding: 30px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const Tile = styled.div`
  text-align: ${p => p.textAlign};
  align-self: ${p => p.alignSelf};
`

export const Text = styled.p`
  font-size: 14px;
  font-weight: 300;
`

export const Time = styled.p`
  font-size: 30px;
  font-weight: 400;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #303030;
  text-align: left;
  margin: 10px 0;
  padding-left: 20px;
`

const buttonColor = `#ff6d00`
const buttonHoverColor = `#ff8124`

export const Button = styled.a.attrs({
  href: props => props.href
})`
  border: 1px solid ${buttonColor};
  background-color: ${buttonColor};
  display: block;
  border-radius: 6px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  padding: 10px 0;
  &:hover {
    background-color: ${buttonHoverColor};
  }
`