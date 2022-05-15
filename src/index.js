import React from 'react';
import ReactDOM from 'react-dom/client';
import RegisterUserScreen from './pages/RegisterUserScreen';
import './createGlobalStyles/index.css'
import HomeScreen from './pages/HomeScreen';
import UpdateUserScreen from './pages/UpdateUserScreen'
import DeleteUserScreen from './pages/DeleteUserScreen'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>

    <Routes>
      <Route path={'/'} element={<RegisterUserScreen />} />
      <Route path="users/:email/:token" element={<HomeScreen />} />
      <Route path='users/:email/:token/delete' element={<DeleteUserScreen />} />
      <Route path='users/:email/:token/update' element={<UpdateUserScreen />} />
    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
