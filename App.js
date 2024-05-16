import React from 'react'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Dashboard from './views/Dashboard'

function App() {
  return (
    <Router>
      <AuthProvider>
        < Navbar/>
        
          <PrivateRoute component={Dashboard} path="/dashboard" exact /
      </AuthProvider>
    </Router>
  )
}

export default App
