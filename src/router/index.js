import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '@constants/login'

class App extends React.Component {
    render() {
        return <Router>
            <Switch>
                <Route exact path="/manager/login" component={Login} />
            </Switch>
        </Router>
    }
}

export default App;