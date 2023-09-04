import { useState } from 'react'
import './App.css'
import {Home} from "../Home/index.jsx";
import {MyAccount} from "../MyAccount/index.jsx";
import {MyOrder} from "../MyOrder/index.jsx";
import {MyOrders} from "../MyOrders/index.jsx";
import {NotFound} from "../NotFound/index.jsx";
import {SignIn} from "../SignIn/index.jsx";

function App() {

  return (
      <div className="bg-gradient-to-r from-blue-500">
          <Home />
          <MyAccount />
          <MyOrder />
          <MyOrders />
          <NotFound />
          <SignIn />
      </div>
  )
}

export default App
