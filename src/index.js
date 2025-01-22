import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'

import Input from './components/input'
import Title from './components/title'
import List from './components/list'

const App = () => {

  const appData = [
    { label: 'Атжумание', important: false},
    { label: 'Голова качание', important: true},
    { label: 'Душевное состояние', important: false},
    { label: 'Отдышание', important: false},
  ]

  return (
    <div className='container'>
      <Title />
      <Input />
      <List data = { appData }/>
    </div>
  )
}

const root = createRoot(document.querySelector('body'))
root.render(<App />)