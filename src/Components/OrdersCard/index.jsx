import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {

    const { totalPrice, totalProducts } = props;

    return (
        <div className="flex justify-between items-center mb-3 border border-black">
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">
                    <span>01.02.23</span>
                    <span>{totalProducts}</span>
                    <span>{totalPrice}</span>
                </p>
            </div>
        </div>
    );
}

export { OrdersCard };