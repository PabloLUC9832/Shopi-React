import {createContext, useEffect, useState} from "react";

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

    //Get products
    const [items, setItems] = useState(null);

    //Search products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    return (
        <ShoppingCartContext.Provider value={{
            count,setCount,
            openProductDetail,closeProductDetail,
            isProductDetailOpen,productToShow,
            setProductToShow, cartProducts,
            setCartProducts, openCheckoutSideMenu,
            closeCheckoutSideMenu, isCheckoutSideMenuOpen,
            order, setOrder,
            items, setItems,
            searchByTitle, setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCartContext,ShoppingCartContextProvider };