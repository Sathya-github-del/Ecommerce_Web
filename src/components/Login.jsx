// src/components/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize navigate function

    // Function to handle login
    const handleLogin = async () => {
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        const loginData = {
            email: email,
            password: password,
        };

        try {
            const response = await fetch("http://127.0.0.1:5000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            if (!response.ok) {
                const data = await response.json();
                alert(data.error || "Login failed!");
                return;
            }

            const data = await response.json();
            const token = data.access_token;

            // Store the JWT token in localStorage (or in cookie, depending on your preference)
            localStorage.setItem("auth_token", token);

            // Navigate to HomePage after successful login
            navigate("/home");

        } catch (error) {
            console.error("Login failed", error);
            alert("An error occurred during login.");
        }
    };

    return (
        <div className="login-container">
            <div id="white" className="glasseffect">
                <div className="login-form">
                    <h2>Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
