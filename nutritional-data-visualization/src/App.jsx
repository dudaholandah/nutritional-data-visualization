import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forms from './pages/forms'
import Visualizations from './pages/visualizations';

function App() {

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Forms/>} />
          <Route path="/visualizations" element={<Visualizations/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
