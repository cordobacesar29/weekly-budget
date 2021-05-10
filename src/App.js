import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Home } from './component/Home';
import { Register } from './component/Register';
import { Profile } from './component/Profile';
import { SignIn } from './component/SignIn';
import { SignUp } from './component/SignUp';
import { Layout } from './component/Layout';
import {UserContext} from './context/user';

function App() {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
      <Layout>
        <Switch>
          <Route exact path='/'> 
            <Home/>
          </Route>  
          <Route path='/register'>
            <Register/>
          </Route> 
          <Route path='/profile'>
            <Profile/>
          </Route>
          <Route path='/signIn'>
            <SignIn/>
          </Route>
          <Route path='/signUp'>
            <SignUp/>
          </Route>
        </Switch>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;