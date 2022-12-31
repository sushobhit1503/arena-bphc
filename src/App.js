import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { auth } from "./config"
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from "./Pages/Register";
import TeamDetails from './Pages/TeamDetails';
import EditTeam from './Pages/EditTeam'
import Toolbar from './Components/Toolbar';
import PrivateRoute from './Components/PrivateRoute';

class App extends React.Component {
  componentDidMount () {
    auth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem("userDetails", JSON.stringify(user))
      }
    })
  }
  render () {
  return (
    <div className="App">
      <Toolbar />
      <Routes>
        <Route path="/profile" exact element={<PrivateRoute ><Profile /></PrivateRoute> } />
        <Route path="/register" exact element={<PrivateRoute><Register /></PrivateRoute>} />
        <Route path="/register/:id" exact element={<PrivateRoute><TeamDetails /></PrivateRoute>} />
        <Route path="/edit-team" exact element={<PrivateRoute><EditTeam /></PrivateRoute>} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </div>
  );
  }
}

export default App;
