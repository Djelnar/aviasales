import React, { Component } from 'react'
import Ticket from './components/ticket'
import Checkbox from './components/checkbox'
import Api from './api'
import {  Container,
          Row,
          Title,
          Card,
          Col70,
          Col30  } from './styled'

const api = new Api()

export default class App extends Component {
  state = {
    noStops: false,
    tickets: []
  }
  componentDidMount() {
    api.getTickets()
      .then(tickets =>
        this.setState(prev => tickets))
  }
  mapTickets(e, i, a) {
    return (
        <Ticket
          key={i}
          {...e}
        />
    )
  }
  toggleFilter = e => {
    this.setState(p => ({
      noStops: !p.noStops
    }))
  }
  render() {
    const { tickets, noStops } = this.state
    return (
      <Container>
        <Row>
          <Col30>
            <Card>
              <div>
                <Title>Фильтр</Title>
                <Checkbox
                cb={this.toggleFilter}
                >Без пересадок</Checkbox>
              </div>
            </Card>
          </Col30>
          <Col70>
            {tickets
              .filter(({stops}) => !!stops !== noStops )
              .map(this.mapTickets)}
          </Col70>
        </Row>
      </Container>
    )
  }
}