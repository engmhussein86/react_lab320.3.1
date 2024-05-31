import { useState } from 'react';
import {learners} from './data/learners';
import './App.css'

import LearnerList from './components/LearnerList';


function App() {
  const [learnerState, setLearnerState] = useState(learners);

  return (
    <>
      <h1>ALAB 320H.3.1 - Rendering Arrays from State</h1>
      <LearnerList learners={learnerState} />

    </>
  )
}

export default App