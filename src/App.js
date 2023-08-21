import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css';
import { UserContext } from './Context/Auth';
import Homepage from './routes/Homepage';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Dashboard from './routes/Dashboard';
import { useEffect, useState } from 'react';
import { verifyToken } from './Api/Api';
import Calendar from 'react-calendar';
import Stats from './routes/Stats';
import NotFound from './routes/NotFound';
import AddHabit from './routes/AddHabit';

function App() {

  const [loading, setLoading] = useState(true)
  const [userAuthInfo, setUserAuthInfo] = useState({})

  const checkUserAuthStatus = async () => {
    try {
      const userObject = await verifyToken(document.cookie.substring(10));
      if(userObject.data){
        setUserAuthInfo(userObject.data[0]);
      }else{
        setUserAuthInfo({email: null})
      }
        setLoading(false);
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    checkUserAuthStatus();
  },[])



  if(loading){
    return(
      <p>Loading...</p>
    )
  }

  return (
    <div className='app'>
      <UserContext.Provider
      value={userAuthInfo}
      >
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/addhabit' element={<AddHabit/>}/>
          <Route path='/dashboard/:habitId/stats' element={<Stats/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>

      </UserContext.Provider>
    </div>
  );
}

export default App;
