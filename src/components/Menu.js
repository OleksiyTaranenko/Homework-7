import { NavLink } from "react-router-dom";
import './Menu.css'

function Menu() {
    return (
        <div className="menu">
            <p className='storeName'>Good shop</p>
            <nav>
                <ul>
                    <li><NavLink to="/" exact="true">Main</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/basket"><img className="basket" src="/img/basket.png" alt="basket" title="Open Basket" /></NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;