import { useLocation } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
    const location = useLocation();
    const { cart } = location.state || {};
    if (!cart) {
        return <p>No items in the cart.</p>;  // Handle case where no cart is passed
    }

    // Calculate total price and additional fees
    const deliveryFee = 150;
    const packingFee = 150;
    const subtotal = cart.reduce((total, item) => total + item.price, 0);
    const totalPrice = subtotal + deliveryFee + packingFee;

    return (
        <div className="order-confirmation">
            <h1>Order Confirmation</h1>

            <div className="order-summary">
                <h2>Product Details</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} className="product-item">
                            <img src={item.images} alt={item.name} className="product-image" loading="lazy" decoding="async" />
                            <div className="product-info">
                                <h3>{item.name}</h3>
                                <p>Price: ₹{item.price}</p>
                                <p>Description: {item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="fees-summary">
                <h3>Order Summary</h3>
                <p><strong>Subtotal:</strong> ₹{subtotal}</p>
                <p><strong>Delivery Fee:</strong> ₹{deliveryFee}</p>
                <p><strong>Packing Fee:</strong> ₹{packingFee}</p>
                <p><strong>Total Price:</strong> ₹{totalPrice}</p>
            </div>

            <div className="checkout-actions">
                <button>Proceed to Payment</button>
            </div>
        </div>
    );
};

export default OrderConfirmation;
