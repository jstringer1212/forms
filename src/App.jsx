import React, { useState } from "react";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
    
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken}  />
    
    </>
  );
}


// Object { message: "ENOENT: no such file or directory, stat '/app/index.html'", name: "Error" }