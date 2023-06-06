import React from "react";
import { Routes, Route } from "react-router-dom";
import { reducerf } from "./redux/store";
import { useDispatch,useSelector } from "react-redux";
import Login from './home/login/Index';
import Dashboard from './dashboard/Index';
import Home from './home/Index';
import User from './dashboard/user/user';
import Photo from "./dashboard/photo/photo";
import Update from "./dashboard/updates/update";
import Admin from './dashboard/admin/admin';
import {ProtectRoute} from './dashboard/ProtectRoutes'
import "./App.css";


function App() {
  const dispatch=useDispatch();
//   const {editProfile:edit} = useSelector((state:any)=>state.profile);
  const {balance,editAccount} = useSelector((state:any)=>state.store.initialStore);

  return (
   //  <div>
   //    <header>
   //      {editAccount?<h1>hello edit? {editAccount}</h1>:<h1>pwamly{editAccount}</h1>}
   //      <button onClick={() => dispatch(reducerf({editAccount:true}))}>change</button>
   //    </header>

   //  </div>

    <Routes>
   <Route path="/home" element={<Home/>}>
      <Route path="login" element={<Login/>} />  
   </Route>

   <Route element={<ProtectRoute/>}>
   <Route path="/" element={<Dashboard/>} >  
      <Route path="photo" element={<Photo/>} /> 
      <Route path="updates" element={<Update/>} />
      <Route path="add-units" element={<Update/>} />  
  
   </Route>
   </Route>
</Routes>
  );
}

export default App;
