import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//Import every page
import Home from './pages/Home';
import Article01 from './pages/articles/Article01';
import Article02 from './pages/articles/Article_02_01132021';
import Article03 from './pages/articles/Article_03_02092021';
import Article04 from './pages/articles/Article_04_03042021';
import About from './pages/About';

export default function Routes(props) {
    const routes = [
        {
            path: '/article01',
            component: Article01
        },
        {
            path: '/using-git-without-cmd',
            component: Article02
        },
        {
            path: '/making-friends-in-48-hours',
            component: Article03
        },
        {
            path: '/interview-with-michael-tucker',
            component: Article04
        },
        {
            path: '/about',
            component: About
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