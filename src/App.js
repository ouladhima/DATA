import React from "react";
import "./App.css";
import Form from "./components/signupLoginComp/Form";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (

    <AuthProvider>
      <div className="App" style={{maxWidth:"400 px" , minHeight:"100vh"}}>
        <Form />
      </div>
    </AuthProvider>


  );
}

export default App;