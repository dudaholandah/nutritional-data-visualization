import './App.scss'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Visualizations from './pages/visualizations';
import Forms1 from './pages/newForms/step1';
import Forms2 from './pages/newForms/step2';
import Forms3 from './pages/newForms/step3';

function App() {

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to='/step1'/>} />
          <Route path="/step1" element={<Forms1/>} />
          <Route path="/step2" element={<Forms2/>} />
          <Route path="/step3" element={<Forms3/>} />
          <Route path="/visualizations" element={<Visualizations/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
