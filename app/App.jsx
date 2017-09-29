import React from 'react'
import ReactDOM from 'react-dom'
import Foo from './Foo'

class App extends React.Component {
  render() {
    return (
      <Foo />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container'),
)
