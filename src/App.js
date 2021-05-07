import { Switch, Route } from "react-router-dom";
import { Home } from './component/Home';
import { Register } from './component/Register';
import { Profile } from './component/Profile';
import { Header } from './component/Header';
import { SignIn } from './component/SignIn';
import { SignUp } from './component/SignUp';
import { Layout } from './component/Layout';

function App() {
  return (
    <Layout>
      
      <Switch>
        <Route
          path='/signIn'
          component={()=>(
            <SignIn/>
          )}
        />
        <Route
          path='/signUp'
          component={()=>(
            <SignUp/>
          )}
        />
        <Header/>
        <Route
          exact path='/home'
          component={()=>(
            <Home/>
          )}
        />
        <Header/>
        <Route
          exact path='/register'
          component={()=>(
            <Register/>
          )}
        />
        <Header/>
        <Route
          exact path='/profile'
          component={()=>(
            <Profile/>
          )}
        />
      </Switch>
    </Layout>
  );
}

export default App;