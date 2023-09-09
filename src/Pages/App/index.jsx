import { useState } from 'react'
import './App.css'
import {Home} from "../Home/index.jsx";
import {MyAccount} from "../MyAccount/index.jsx";
import {MyOrder} from "../MyOrder/index.jsx";
import {MyOrders} from "../MyOrders/index.jsx";
import {NotFound} from "../NotFound/index.jsx";
import {SignIn} from "../SignIn/index.jsx";
import {BrowserRouter, useRoutes} from "react-router-dom";
import {Navbar} from "../../Components/Navbar/index.jsx";
import {ShoppingCartContextProvider} from "../../Contex/index.jsx";
import {CheckoutSideMenu} from "../../Components/CheckoutSideMenu/index.jsx";

const AppRoutes = () => {
    let routes  = useRoutes([
        { path: '/',element: <Home /> },
        { path: '/clothes',element: <Home /> },
        { path: '/electronics',element: <Home /> },
        { path: '/furnitures',element: <Home /> },
        { path: '/toys',element: <Home /> },
        { path: '/others',element: <Home /> },
        { path: '/my-account',element: <MyAccount /> },
        { path: '/my-order',element: <MyOrder /> },
        { path: '/my-orders',element: <MyOrders /> },
        { path: '/my-orders/last',element: <MyOrder /> },
        { path: '/my-orders/:id',element: <MyOrder /> },
        { path: '/sign-in',element: <SignIn /> },
        { path: '/*',element: <NotFound /> },
    ]);

    return routes;
}
const App = () => {

    return (
        <ShoppingCartContextProvider>
            <BrowserRouter>
                <AppRoutes />
                <Navbar />
                <CheckoutSideMenu />
            </BrowserRouter>
        </ShoppingCartContextProvider>
    )
}

export default App
