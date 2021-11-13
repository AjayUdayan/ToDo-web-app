import React from 'react';
import { Switch, Route } from "react-router-dom";
import AppLayout from './layout';
import PrivateRoute from './auth';
import Login from './pages/Login';
import Dashboard from './components/dashboard';
import Register from './pages/Register';

import { Provider } from "react-redux";
import store from "./redux/store"
import Page404Error from './pages/Page404Error';
import './index.css'

var authenticated = false;
if (localStorage.getItem("token")) {
    authenticated = true
}

function App() {
    return (
        <Provider store={store}>
            <AppLayout>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <PrivateRoute authenticated={authenticated} path="/" component={Dashboard} />
                    <Route component={Page404Error} />
                </Switch>
            </AppLayout>
        </Provider>

    );
}

export default App;