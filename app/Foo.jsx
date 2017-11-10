import React from 'react'
import { Grid } from './Grid'
import Piece from './Piece'
import '../styles/Foo.styl'

export default class Foo extends React.Component {
  render() {
    return (
      <div className="background-wrap">
        <svg
          width="640"
          height="640"
          style={{ background: 'url(./bg.jpg)' }}
        >
          <Grid />
          <Piece />
        </svg>
      </div>
    )
  }
}
