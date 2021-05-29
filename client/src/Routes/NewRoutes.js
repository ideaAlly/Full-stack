import { BroserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from '../components/Profile/Profile.js';
import EditProfile from '../components/Profile/EditProfile.js';

function NewRoutes() {
    <Router>
        <Switch>
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/EditProfile" component={ EditProfile}/>
        </Switch>
    </Router>
}

export default NewRoutes;