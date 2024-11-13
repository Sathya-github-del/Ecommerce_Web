// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importing i18n hook
import SearchBar from './SearchBar';
import './Header.css';
import logoImage from './logo.png'; // Importing logo image

/* eslint-disable react/prop-types */
function Header({ cartCount }) {
    const { t, i18n } = useTranslation(); // Access translation functions
    const [language, setLanguage] = useState(i18n.language); // State to track selected language

    const handleLanguageChange = (event) => {
        const selectedLang = event.target.value;
        setLanguage(selectedLang);
        i18n.changeLanguage(selectedLang); // Change language
    };
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        window.location.href = '/login';
    }
    return (
        <header className="navbar">
            <nav>
                <ul className="nav-list">
                    <div className='logo'>
                        <img src={logoImage} alt="Logo" />
                    </div>
                    <li className="nav-item">
                        <Link to="/home" className="nav-link" style={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: 16, lineHeight: 1.5, letterSpacing: 0.5 }}>Home</Link>                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link" style={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: 16, lineHeight: 1.5, letterSpacing: 0.5 }}>Products</Link>
                    </li>
                    <li className="nav-item">
                        <SearchBar />
                    </li>
                    <li className="nav-item language-selector">
                        <select
                            id="language"
                            name="language"
                            value={language}
                            onChange={handleLanguageChange}
                            className="language-dropdown"
                        >
                            <option value="en">
                                <img
                                    src="https://flagcdn.com/w20/us.png"
                                    alt="English"
                                    className="flag-icon"
                                />
                                EN
                            </option>
                            <option value="fr">
                                <img
                                    src="https://flagcdn.com/w20/fr.png"
                                    alt="French"
                                    className="flag-icon"
                                />
                                FR
                            </option>
                            <option value="es">
                                <img
                                    src="https://flagcdn.com/w20/es.png"
                                    alt="Spanish"
                                    className="flag-icon"
                                />
                                SP
                            </option>
                            <option value="de">
                                <img
                                    src="https://flagcdn.com/w20/de.png"
                                    alt="German"
                                    className="flag-icon"
                                />
                                GR
                            </option>
                            <option value="it">
                                <img
                                    src="https://flagcdn.com/w20/it.png"
                                    alt="Italian"
                                    className="flag-icon"
                                />
                                It
                            </option>
                        </select>
                    </li>

                    <li className="nav-item">
                        {isLoggedIn ? (
                            <Link to="/logout" className="nav-link" style={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: 16, lineHeight: 1.5, letterSpacing: 0.5 }} onClick={handleLogout} >
                                Sign out
                            </Link>
                        ) :
                            (
                                <Link to="/login" className="nav-link" style={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: 16, lineHeight: 1.5, letterSpacing: 0.5 }}>
                                    Sign in<br />
                                    <b className="accounts" style={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: 12, lineHeight: 1.5, letterSpacing: 0.5 }}>Accounts</b>
                                </Link>
                            )}
                    </li>

                    <li className="nav-item">
                        <Link to="/signup" className="nav-link" style={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: 16, lineHeight: 1.5, letterSpacing: 0.5 }}>Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link" style={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: 16, lineHeight: 1.5, letterSpacing: 0.5 }}>Support</Link>
                    </li>
                    <li className="nav-item cart-icon">
                        <Link to="/cart">
                            <div id="cart">
                                <img
                                    src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
                                    alt="Cart"
                                    className="cart-icon-img"
                                />
                                <span className="cart-count">{cartCount}</span>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item profile-icon dropdown">
                        <div id="Profile" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img
                                src="https://img.icons8.com/ios/50/000000/user.png"
                                alt="Profile"
                                className="profile-icon-img"
                            />
                        </div>
                        <ul className="dropdown-menu" aria-labelledby="Profile">
                            <li className="dropdown-item">
                                <Link to="/myorders" className="nav-link">My Orders</Link>
                            </li>
                            <li className="dropdown-item">
                                <Link to="/logout" className="nav-link" onClick={handleLogout}>Sign out</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header >
    );
}

export default Header;
