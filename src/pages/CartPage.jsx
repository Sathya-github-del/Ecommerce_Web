// CartPage.jsx
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

/* eslint-disable react/prop-types */
const Cart = ({ cart }) => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        // Pass cart data to the OrderConfirmation page using navigate with state
        navigate('/orderconfirmation', { state: { cart } });
    };


    return (
        <div id="c">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <h3>{item.name}</h3>
                            <img src={item.images} alt={item.name} className="product-image" loading="lazy" decoding="async" />
                            <p>Price: ₹{item.price}</p>
                            <p>Description: {item.description}</p>
                        </li>
                    ))}
                    <button onClick={handleCheckout}>Check Out</button>
                </ul>
            )}
        </div>
    );
};

export default Cart;
