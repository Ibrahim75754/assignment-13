import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import AuthProvider from './contexts/AuthProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router >
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
