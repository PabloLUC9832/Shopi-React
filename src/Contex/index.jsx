import {createContext, useState} from "react";

const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({children}) => {

    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    return (
        <ShoppingCartContext.Provider value={{
            count,setCount,
            openProductDetail,closeProductDetail,
            isProductDetailOpen
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCartContext,ShoppingCartContextProvider };