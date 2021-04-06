import React from 'react';
import ReactDOM from 'react-dom';
// Using any css file in one page will import it to all other pages
// Because there is one html file that is shared bewteen all JS scripts
import './pages/css/Navbar.css';
import './index.css';

import MyRoute from './Route';

ReactDOM.render(
  <MyRoute></MyRoute>,
  document.getElementById('root')
);