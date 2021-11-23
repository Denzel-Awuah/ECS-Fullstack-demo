import React from 'react';
import AdminLTE, { Sidebar } from 'adminlte-2-react';
import './index.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
import { Employees } from './Employees';
import { Home } from './Home';
import { test } from './test';


const { Item } = Sidebar;

function App() {



  return (


    <div>

      <nav className="navbar navbar-dark bg-dark">
        <a class="navbar-brand menu-title" href="#">Fullstack Demo</a>

      </nav>
      <Employees />

    </div>


  );

}

export default App;

