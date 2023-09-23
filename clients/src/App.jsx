import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import jwt_decode from "jwt-decode";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";

function App() {

  //   const [user ,setUser] = useState({})
  //   function handleCallbackResponse(response){
  //       console.log("Encoded JWT ID token:" +  response.credential);
  //       let userObject = jwt_decode(response.credential);
  //       console.log(userObject)
  //       setUser(userObject);
  //       document.getElementById(signIn).hidden=true;
  //   }

  // useEffect (() =>{
  //   // global google
  //   google.accounts.id.initialize({
  //     client_id: "804686950476-ag4d2touc4mms8cuoviooei45okt7663.apps.googleusercontent.com",
  //     callback: handleCallbackResponse

  //   })
  //   google.accounts.id.renderButton(
  //     document.getElementById("signInDiv"),
  //     {theme: "outline" , size: "large"}
  //     );

  // },[])

  const dispatch = useDispatch();
useEffect (()=>{
  dispatch(fetchAllQuestions())
  dispatch(fetchAllUsers())
}, [dispatch])
  
  return (
    <div className="app">
      <div id="signInDiv"></div>
      <Router>
        <Navbar />
        <AllRoutes/>
      </Router>
    </div>
  );
}
export default App;
