import {Switch, Route} from "react-router-dom"


import './css/App.css';
// Component imports
import Home from './components/Home'
import BookResults from './components/BookResults'
import FavedBooks from './components/FavedBooks'
import Login from './components/Login'
import Profile from './components/Profile'
import Signup from './components/Signup'

function App() {
  return (
    <Switch>
      <Route exact path={['/']} component={Home}/>
      <Route exact path={['/login']} component={Login}/>
      <Route exact path={['/signup']} component={Signup}/>
      <Route exact path={['/profile']} component={Profile}/>
      <Route exact path={['/profile/faves']} component={FavedBooks}/>
      <Route exact path={['/books']} component={BookResults}/>
    </Switch>
  );
}

export default App;
