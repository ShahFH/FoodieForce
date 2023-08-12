import Home from './Home'
import Searched from './Searched'
import Cuisine from './Cuisine'
import Recipee from './Recipee'
import { Routes, Route } from 'react-router-dom'
function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/recipee/:name' element={<Recipee />} />
    </Routes>
  )
}

export default Pages