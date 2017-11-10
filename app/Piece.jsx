import React from 'react'

export default class Piece extends React.Component {
  render() {
    return (
      <g>
        <circle cx="220" cy="220" r="17" fill="black" />
        <circle cx="260" cy="220" r="17" fill="white" />
      </g>
    )
  }
}
