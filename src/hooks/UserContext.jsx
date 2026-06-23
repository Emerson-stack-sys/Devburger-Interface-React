import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const putUserData = (user) => {
    setUserInfo(user);
    localStorage.setItem('devburger:userData', JSON.stringify(user));
  };

  const logout = () => {
    setUserInfo(null);
    localStorage.removeItem('devburger:userData');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('devburger:userData');

    if (!storedUser || storedUser === 'undefined' || storedUser === 'null') {
      localStorage.removeItem('devburger:userData');
      setUserInfo(null);
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);
      setUserInfo(parsedUser);
    } catch (error) {
      console.error('Erro ao ler user do localStorage:', error);
      localStorage.removeItem('devburger:userData');
      setUserInfo(null);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }

  return context;
};
