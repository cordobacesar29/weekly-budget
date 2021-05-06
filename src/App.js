import { Switch, Route } from "react-router-dom";
import { LoginForm } from './component/LoginForm';
import { Home } from './component/Home';
import { Register } from './component/Register';
import { Profile } from './component/Profile';
import { Header } from './component/Header';



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route
          exact path='/'
          component={()=>(
            <LoginForm/>
          )}
        />
        <Route
          exact path='/home'
          component={()=>(
            <Home/>
          )}
        />
        <Route
          exact path='/register'
          component={()=>(
            <Register/>
          )}
        />
        <Route
          exact path='/profile'
          component={()=>(
            <Profile/>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;