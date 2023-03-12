import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useEffect } from "react";
import useShop from "./Helper/StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import {auth } from "./firebase"

function App() {
  const {addUser}=useShop();

  useEffect(()=>{
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
      
        console.log('The user is',authUser)
       addUser(authUser)
      
      } else {
        addUser(null);
      }
    });
  },[])


  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
