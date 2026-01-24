import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});


export const UserProvider = ({ children }) => {
     const [userInfo, setUserInfo] = useState(null);

     const putUserData = (userInfo) => {
          setUserInfo(userInfo)
          localStorage.setItem('devburge:userData', JSON.stringify(userInfo));
     };
     const logout = () => {
          setUserInfo({});
          localStorage.removeItem("devburge:userData");
     };

     useEffect(() => {
          const userInfoLocalStorage = localStorage.getItem('devburge:userData');
          if (userInfoLocalStorage) {
               setUserInfo(JSON.parse(userInfoLocalStorage));
          }
     }, []);

     return (
          <UserContext.Provider value={{ userInfo, putUserData, logout }}>
               {children}
          </UserContext.Provider>
     );
}

export const useUser = () => {
     const context = useContext(UserContext);
     if (!context) {
          throw new Error("useUser must be a valid context");
     }
     return context;
}