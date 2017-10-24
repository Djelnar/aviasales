import React from 'react'
import {
  Card,
  Left,
  Right,
  Button,
  Tile,
  Text,
  Time
} from '../styled'

export default ({ origin,
                  origin_name,
                  destination,
                  destination_name,
                  price,
                  stops,
                  departure_date,
                  arrival_date,
                  departure_time,
                  arrival_time }) =>
  <Card>
    <Left>
      <Button href={'#'} >
        Купить за<br/>
        {price} руб.
      </Button>
    </Left>
    <Right>
      <Tile>
        <Time>{departure_time}</Time>
        <Text>{`${origin}, ${origin_name}`}</Text>
        <Text>{`${departure_date}`}</Text>
      </Tile>
      <Tile alignSelf="center">
        <Text>ПЕРЕСАДОК: {stops}</Text>
      </Tile>
      <Tile textAlign="right">
        <Time>{arrival_time}</Time>
        <Text>{`${destination}, ${destination_name}`}</Text>
        <Text>{`${arrival_date}`}</Text>        
      </Tile>
    </Right>
  </Card>