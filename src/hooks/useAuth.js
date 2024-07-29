import React from 'react';
import { verifyToken } from '../Api/Api';

function useAuth() {
  const [userAuth, setUserAuth] = React.useState({});

  const getUserAuthStatus = async () => {
    try {
      console.log('Im omw to check');
      await verifyToken(document.cookie.substring(10)).then((userObject) => {
        setUserAuth(userObject.data ? userObject.data[0] : { email: null });
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUserAuthStatus();
  }, []);
  return { userAuth, getUserAuthStatus };
}

export { useAuth };
