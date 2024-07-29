import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from './Context/Auth';
import { useAuth } from './hooks/useAuth';
import Navbar from './components/Navbar';
import Homepage from './routes/Homepage';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Dashboard from './routes/Dashboard';
import Stats from './routes/Stats';
import NotFound from './routes/NotFound';
import AddHabit from './routes/AddHabit';
// import Calendar from 'react-calendar';
import './App.css';

function App() {
  const { userAuth } = useAuth();

  React.useEffect(() => {
    console.log(userAuth);
  }, []);

  return (
    <div className='app'>
      <UserContext.Provider value={userAuth}>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={userAuth.email ? <Dashboard /> : <Homepage />}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/addhabit' element={<AddHabit />} />
          <Route path='/dashboard/:habitId/stats' element={<Stats />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
