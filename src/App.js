import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
