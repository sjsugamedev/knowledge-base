import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Import every page
import Home from './pages/Home';
import Article01 from './pages/articles/Article01';

export default function Routes(props) {
    const routes = [
        {
            path: '/article01',
            component: Article01
        }
    ]

    return (
        <Router>
            <Switch>
                {routes.map((route, index) => {
                    return <Route exact key={index}
                        path={route.path} component={route.component} />
                })}
                <Route component={Home} />
            </Switch>
        </Router>
    )
}