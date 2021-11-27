import React from 'react'
import login from './containers/login'
import layout from './containers/layout'
import './styles/global.css'

const App = () => {
  return (
    <div>
      <layout>
        <login />
      </layout>
    </div>
  )
}

export default App






