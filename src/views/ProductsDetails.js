import { useContext, useEffect, useState } from "react";
import Context from "../context";
import { Link, useParams } from "react-router-dom";
import DefaultButton from "./DefaultButton";
import './ProductsDetails.css';
import Basket from "./Basket";

function ProductsDetails() {
    const { count, setCount } = useContext(Context);
    const { productId } = useParams();
    const [data, setData] = useState({});
    const { title, image, price, description, category } = data;

    function addToBasket() {
        localStorage.setItem('title', title);
        localStorage.setItem('price', price);
        localStorage.setItem('count', count + 1);
    }

    function removeFromBasket() {
        localStorage.setItem('count', count - 1);
    }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(json => {
                setData(json)
            })
    }, [productId])

    return (
        <div className="products-details">
            <h1>Product name: {title}</h1>
            <h3>*Category: {category}</h3>
            <img src={image} alt={description} title={title}/>
            <p>Price: {price}$</p>
            <DefaultButton title='Add' click={(e) => { addToBasket(e); setCount(count + 1) }} />
            <DefaultButton title='Remove' click={(e) => { removeFromBasket(e); setCount(count - 1) }} />
            <span> Count: {count}</span>
            <Basket title={title} price={price} count={count} />
            <div><Link to='/products'>Return to Products list</Link></div>
        </div>
    );
}

export default ProductsDetails;