import React from 'react'
import '../styles/Foo.styl'

export default class Foo extends React.Component {
  render() {
    return (
      <div>
        <div className="title">HELLO</div>
        <svg
          width="500"
          height="500"
          style={{ background: 'url(./bg.jpg)' }}
        >
          hi
        </svg>
      </div>
    )
  }
}
