import {Layout} from "../../Components/Layout/index.jsx";
import {Card} from "../../Components/Card/index.jsx";
import {useContext} from "react";
import {ProductDetail} from "../../Components/ProductDetail/index.jsx";
import {ShoppingCartContext} from "../../Contex/index.jsx";

function Home() {

    const context = useContext(ShoppingCartContext);

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">Exclusive Products</h1>
            </div>
            <input
                type="text" placeholder="Search a product"
                className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
                onChange={(event) => context.setSearchByTitle(event.target.value)}
            />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {
                    context.items ?.map(item => (
                        <Card data={item} key={item.id}/>
                    ))
                }
            </div>
            <ProductDetail />
        </Layout>
    );
}

export { Home };