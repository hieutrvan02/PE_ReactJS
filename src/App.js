import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuForm from "./components/MenuForm";
import NewsListFull from './components/NewListFull';
import Contact from './components/Contact';

function App() {
  return (
    <React.Fragment>
      <header>
        <MenuForm />
      </header>
      <Router>
        <Routes>
          <Route exact path="/" Component={NewsListFull} />
          <Route exact path="/contactus" Component={Contact}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
