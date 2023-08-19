import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css';
import { UserContext } from './Context/Auth';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';
import { verifyToken } from './Api/Api';

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
  console.log('??????????')
  console.log(userAuthInfo)
  console.log('??????????')
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
        </Routes>

      </UserContext.Provider>
    </div>
  );
}

export default App;
