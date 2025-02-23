import { createContext , useEffect, useState } from "react";


export const UserContext = createContext(0) ;

export function UserContextProvider ( {children} ){

  const [userLogin, setUserLogin] = useState(null) ;

  useEffect(()=>{
    if(localStorage.getItem("userToken") !== null){
      setUserLogin(localStorage.getItem("userToken"))
    }
  } , [])

  return <UserContext.Provider value = { {userLogin ,setUserLogin } }>
    {children}
  </UserContext.Provider>
}