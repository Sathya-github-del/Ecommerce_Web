// src/components/Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import './Signup.css';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setIsSubmitting(false);
            return;
        }

        const userData = {
            name: name,
            email: email,
            password: password,
        };

        try {
            const response = await fetch("http://127.0.0.1:5000/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.error || "Signup failed!");
                setIsSubmitting(false);
                return;
            }

            setIsSubmitting(false);
            alert("Signup successful! Please login.");
            navigate("/login");

        } catch (error) {
            console.error("Signup failed", error);
            setIsSubmitting(false);
            alert("An error occurred during signup.");
        }
    };

    return (
        <div className="signup-container">
            <div id="white" className="signup-form">
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <br />
                    <button type="submit" disabled={isSubmitting}>SignUp</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Signup;
