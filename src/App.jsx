/*import ProfileComponent from './components/ProfileComponent/ProfileComponent';
import './App.css'

function App() {
  return (
    <div className="App">
      <ProfileComponent />
    </div>
  )
}

export default <App></App>*/

import { useState } from 'react'
import './App.css'

import CardsComponent from './components/CardsComponent/CardsComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Time tracker
      <CardsComponent/>
    </div>
  )
}

export default App