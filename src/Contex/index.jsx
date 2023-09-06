import {createContext, useState} from "react";

const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({children}) => {

    //Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);

    //Product detail - Open Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({});

    return (
        <ShoppingCartContext.Provider value={{
            count,setCount,
            openProductDetail,closeProductDetail,
            isProductDetailOpen,productToShow,
            setProductToShow,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCartContext,ShoppingCartContextProvider };