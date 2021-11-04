import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { About } from './pages/About'
import { Todo } from './pages/Todo';
import {Home} from './pages/Home'
import { Detail } from './pages/Detail';
import {Header } from './component/Header'
function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Header/>

          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/todo">
              <Todo />
            </Route>
            <Route exact path="/todo/:id">
              <Detail/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
