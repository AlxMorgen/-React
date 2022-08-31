import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/UI/Navbar/Navbar";
import AppRoute from "./components/AppRoute";
import { AuthContext } from "./contex";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (

    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <Router>
      <Navbar />
      <AppRoute/>
      
    </Router>
    </AuthContext.Provider>
    
  );
}

export default App;
