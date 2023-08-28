import { useState } from 'react'
import './App.css'


import { Scrolly } from './Scrolly';

import { Scroll } from '@react-three/drei';

function App() {
  

  return (
    
      <Scrolly
        spheres={[
          [1, 'orange', 0.05, [-0.5, 0, 0]],
          [0.75, 'hotpink', 0.1, [-0.5, 0, 0]],
          [1.25, 'aquamarine', 0.2, [-0.5, 0, 0]],
          [1.5, 'lightblue', 0.3, [-0.5, 0, 0]],
          [2, 'pink', 0.3, [-0.5, 0, 0]],
          [2, 'skyblue', 0.3, [-0.5, 0, 0]],
          [1.5, 'orange', 0.05, [-0.5, 0, 0]],
          [2, 'hotpink', 0.1, [-0.5, 0, 0]],
          [1.5, 'aquamarine', 0.2, [-0.5, 0, 0]],
          [1.25, 'lightblue', 0.3, [-0.5, 0, 0]],
          [1, 'pink', 0.3, [-0.5, 0, 0]],
          [1, 'skyblue', 0.3, [-0.5, 0, 0]]
        ]}
        
      />  
  )
}

export default App
