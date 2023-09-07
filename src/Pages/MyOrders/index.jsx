import {Layout} from "../../Components/Layout/index.jsx";
import {OrdersCard} from "../../Components/OrdersCard/index.jsx";
import {useContext} from "react";
import {ShoppingCartContext} from "../../Contex/index.jsx";
import {Link} from "react-router-dom";
import {ChevronLeftIcon} from "@heroicons/react/20/solid/index.js";

function MyOrders() {

    const context = useContext(ShoppingCartContext);

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-6'>
                <h1>My Orders</h1>
            </div>
            {
                context.order.map((order,index) => {
                   <Link key={index} to={`/my-orders/${order.id}`}>
                        <OrdersCard
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                   </Link>
                })
            }
        </Layout>
    );
}

export { MyOrders };