import React from 'react'

export const Grid = () => {
  const horizontalLines = []
  const verticalLines = []

  for (let i = 0; i < 16; i += 1) {
    horizontalLines
      .push(<line key={i} x1={20} y1={40 * i + 20} x2={620} y2={40 * i + 20} stroke="black" />)
    verticalLines
      .push(<line key={i} x1={40 * i + 20} y1={20} x2={40 * i + 20} y2={620} stroke="black" />)
  }
  return (
    <g>
      {horizontalLines}
      {verticalLines}
    </g>
  )
}
