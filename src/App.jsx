// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react'; // Lazy loading for improved performance
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Lazy loading pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const Contact = lazy(() => import('./components/Contact'));
const Cart = lazy(() => import('./pages/CartPage'));
const CheckOutPage = lazy(() => import('./pages/CheckoutPage'));
const OrderConfirmation = lazy(() => import('./pages/OrderConfirmation'));

function App() {
  const [cart, setCart] = useState([]); // State to hold cart items

  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
  };

  return (
    <Router>
      {/* Header/NavBar */}
      <Header cartCount={cart.length} />

      {/* Main Content */}
      <div className="content">
        <Suspense fallback={<div>
          <div className="loading-animation" style={{ display: 'flex', justifyContent: 'space-around', width: '100px', height: '100px', animation: 'loading 3s infinite' }}>
            <div className="loading-circle" style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'blue', margin: '10px', animation: 'loading-circle 3s infinite' }}></div>
            <div className="loading-circle" style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'blue', margin: '10px', animation: 'loading-circle 3s infinite', animationDelay: '0.5s' }}></div>
            <div className="loading-circle" style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'blue', margin: '10px', animation: 'loading-circle 3s infinite', animationDelay: '1s' }}></div>
          </div>
        </div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<ProductPage addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/orderconfirmation" element={<OrderConfirmation />} />
          </Routes>
        </Suspense>
      </div >

      {/* Footer */}
      < Footer />
    </Router >
  );
}

export default App;
