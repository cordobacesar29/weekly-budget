import { Switch, Route } from "react-router-dom";
import { LoginForm } from './component/LoginForm';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact path='/'
          component={()=>(
            <LoginForm/>
          )}
        />
        <Route
          exact path='/register'
          component={()=>(
            <div>
              <h1>Hola mundo register</h1>
            </div>
          )}
        />
        <Route
          exact path='/home'
          component={()=>(
            <div>
              <h1>Hola mundo home</h1>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
