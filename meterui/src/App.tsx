import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { editProfile,editAccount } from "./redux/store";
import { useDispatch,useSelector } from "react-redux";
import Login from './home/login/Index';
import Dashboard from './dashboard/Index';
import Home from './home/login/Index';
import User from './dashboard/user/user';
import Admin from './dashboard/admin/admin';
import {ProtectRoute} from './dashboard/ProtectRoutes'


function App() {
  const dispatch=useDispatch();
  const {editProfile:edit} = useSelector((state:any)=>state.profile);
  const {accountName} = useSelector((state:any)=>state.account.accountValue);

  return (
    // <div>
    //   <header>
    //     {1?<h1>hello edit? {accountName}</h1>:<h1>pwamly{accountName}</h1>}
    //     <button onClick={() => dispatch(editAccount('pwamly'))}>change</button>
    //   </header>
    // </div>

    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route element={<ProtectRoute/>}>
   <Route path="dashboard" element={<Dashboard/>} >  
      <Route path="user" element={<User/>} /> 
      <Route path="admin" element={<Admin/>} />  
   </Route>
   </Route>
   <Route path="/login" element={<Login/>} />  
</Routes>
  );
}

export default App;
