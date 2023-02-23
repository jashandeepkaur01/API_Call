import React from 'react'
import Join from './Join'

import {Routes, Route } from 'react-router-dom';
import City from './City';
function App() {
  return (
 <>
         <Routes> 
             <Route exact  path="/" element={<Join/>}/>
             <Route path="/city/:name" element={<City/>}/> 
            
        </Routes>

 </>
     

  )
}

export default App;