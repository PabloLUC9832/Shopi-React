import {Layout} from "../../Components/Layout/index.jsx";
import {Card} from "../../Components/Card/index.jsx";
import {useEffect, useState} from "react";

function Home() {

    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    return (
        <Layout>
            Home
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen">
                {
                    items ?.map(item => (
                        <Card data={item} key={item.id}/>
                    ))
                }
            </div>
        </Layout>
    );
}

export { Home };