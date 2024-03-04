import React, { useCallback, useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import MainNavigation from './shared/components/navigation/mainNavigation.jsx';
import NewPlace from './places/pages/newPlace.jsx';
import UserPlaces from "../src/places/pages/userPlaces.jsx"
import UpdatePlace from './places/pages/updatePlace.jsx';
import Auth from './user/pages/auth.jsx';
import User from "./user/pages/user.jsx"

import { AuthContext } from './shared/components/context/auth-context.jsx';

function App() {

  const [isLoggedIn , setIsLoggedIn] = useState(false)

  const login = useCallback(()=>{
    setIsLoggedIn(true);
  },[])

  const logout = useCallback(()=>{
    setIsLoggedIn(false);
  },[])

  let routes;

  if(isLoggedIn){
    routes=(
      <React.Fragment>
        <Route path="/" element={<User/>} />
        <Route path='/:userId/places' element={<UserPlaces/>}/>
        <Route path='/places/new' element={<NewPlace/>}/>
        <Route path='/places/:placeId' element={<UpdatePlace/>}/>
        <Route path='/auth' element={<Navigate to={"/"}/>}></Route>
      </React.Fragment>
    ) 
  }
  else{ 
    routes=(
      <React.Fragment>
        <Route path="/" element={<User/>} />
        <Route path='/:userId/places' element={<UserPlaces/>}/>
        <Route path='/auth' element={<Auth/>}></Route>
        <Route path='*' element={<Navigate to={"/"}/>}></Route>
      </React.Fragment>
    )
  }
  
  return(
    <AuthContext.Provider value={{isLoggedIn : isLoggedIn , login : login , logout: logout}}>
    <Router>
      <MainNavigation />
        <main>
          <Routes>
            {routes}
          </Routes>
        </main>
    </Router>
    </AuthContext.Provider>
  )
}

export default App;

//:userId/places : these is called a user params , so if we have a lot of users we can use this
//feature , here it matches the '/u1/places' in navlinks and tries to find the same path in 
//app.jsx routing , as it cant find the same exact link it matches the 'u1' in navlinks with
//':userId' in app , and so it loads the u1/places , here ":" this is very much compulsory 
//for the react to match the url given in other component with the url in the app.jsx
//and the name after ":" may be anything it need not to be always userId 


{/* <Route path="/" element={<User/>} />
<Route path='/:userId/places' element={<UserPlaces/>}/>
<Route path='/places/new' element={<NewPlace/>}/>
<Route path='/places/:placeId' element={<UpdatePlace/>}/>
<Route path='/auth' element={<Auth/>}></Route> */}