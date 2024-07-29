import React from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyToken } from '../Api/Api';

function useAuth() {
  const [userAuth, setUserAuth] = React.useState({});
  const navigate = useNavigate();
  const getUserAuthStatus = async () => {
    try {
      console.log('Im omw to check');
      await verifyToken(document.cookie.substring(10)).then((userObject) => {
        setUserAuth(userObject.data[0] || {});
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    document.cookie =
      'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    navigate('/');
    window.location.reload();
  };

  React.useEffect(() => {
    getUserAuthStatus();
  }, []);
  return { userAuth, getUserAuthStatus, logout };
}

export { useAuth };
