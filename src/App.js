import {Switch, Route} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import './css/App.css';
// Component imports
import Home from './components/Home'
import BookDetails from './components/BookDetails'
import FavedBooks from './components/FavedBooks'
import Login from './components/Login'
import Profile from './components/Profile'
import Signup from './components/Signup'
import Layout from './components/common/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path={['/', '/home']} component={Home}/>
        <Route exact path={['/login']} component={Login}/>
        <Route exact path={['/signup']} component={Signup}/>
        <Route exact path={['/profile']} component={Profile}/>
        <Route exact path={['/profile/faves']} component={FavedBooks}/>
        <Route path={['/books/:bookid']} component={BookDetails}/>
      </Switch>
    </Layout>
  );
}

export default App;
