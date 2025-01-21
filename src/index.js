import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'

import Input from './components/input'
import Title from './components/title'
import List from './components/list'

const div = (
  <div className='container'>
    <Title />
    <Input />
    <List />
  </div>
)

const root = createRoot(document.querySelector('body'))
root.render(div)