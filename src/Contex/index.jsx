import {createContext, useState} from "react";

const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({children}) => {

    //Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);

    //Product detail - Open Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Checkout side menu - Open Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({});

    //Shopping Cart - Add produts to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Shopping Cart - Order
    const [order, setOrder] = useState([]);

    return (
        <ShoppingCartContext.Provider value={{
            count,setCount,
            openProductDetail,closeProductDetail,
            isProductDetailOpen,productToShow,
            setProductToShow, cartProducts,
            setCartProducts, openCheckoutSideMenu,
            closeCheckoutSideMenu, isCheckoutSideMenuOpen,
            order, setOrder,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCartContext,ShoppingCartContextProvider };