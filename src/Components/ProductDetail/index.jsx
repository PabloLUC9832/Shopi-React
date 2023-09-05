import { XMarkIcon } from '@heroicons/react/24/solid'
import {useContext} from "react";
import {ShoppingCartContext} from "../../Contex/index.jsx";
const ProductDetail = () => {

    const context = useContext(ShoppingCartContext);

    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex': 'hidden'} 
            flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)] top-[68px]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black"></XMarkIcon>
                </div>
            </div>
        </aside>
    );
}

export { ProductDetail };