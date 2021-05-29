import LoginPage from './components/LoginPage/LoginPage';
import './components/LoginPage/LoginPage.css';
import EditProfile from './components/Profile/EditProfile';
import Profile from './components/Profile/Profile';
// import Box from './components/InterestsPage/Box.js';
// import './components/InterestsPage/Box.css';
// import Navbar from './components/InterestsPage/Navbar.js';
// import './components/InterestsPage/Navbar.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
       <Router>
        <Switch>
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/EditProfile" component={ EditProfile}/>
        </Switch>
    </Router>
  );
}

export default App;