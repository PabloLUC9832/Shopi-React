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
    const [filteredItems, setFilteredItems] = useState(null);

    //Search products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    const filteredItemsbyTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    };

    const filteredItemsbyCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    };

    const filterBy = (searchType,items,searchByTitle,searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsbyTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsbyCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsbyCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return items
        }
    };

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory]);

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
            searchByTitle, setSearchByTitle,
            filteredItems, setFilteredItems,
            searchByCategory, setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCartContext,ShoppingCartContextProvider };