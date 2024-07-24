// import { useEffect, useState } from 'react';
// import UserContext from './UserContext';


// function UserContextProvider({ children }) {
//   const [user, setUser] = useState({
//     userDetails: '',
//     token: '',
//   });
// console.log("da=sdasd",user)

// useEffect(()=>{

//   setUser(JSON.parse(localStorage.getItem('auth')))

// },[])
//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export default UserContextProvider;


import { useEffect, useState } from 'react';
import UserContext from './UserContext';

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    userDetails: '',
    token: '',
    role: '', // Add role to user state
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('auth'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;