import Home from './Home'
import Searched from './Searched'
import Cuisine from './Cuisine'
import Recipee from './Recipee'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes Location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/recipee/:name' element={<Recipee />} />
    </Routes>
    </AnimatePresence>
  )
}

export default Pages