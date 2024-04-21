import React from "react";
import { useState } from "react";
import "./index.css";



export default function SignUpForm({token, setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    async function handleSubmit(event) {
        event.preventDefault();
        // console.log("Hello 👋");
        if (username.length < 8) {
            setUsernameError("Username must be at least 8 characters long.");
            return;
        } else {
            setUsernameError("");
        }
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long.");
            return;
        } else {
            setPasswordError("");
        }
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
            { 
              method: "POST", 
              headers: { 
                "Content-Type": "application/json" 
              }, 
              body: JSON.stringify({ 
                username: username, 
                password: password, 
              }) 
            })
        
            const result = await response.json();
            setToken(result.token);
            console.log(result);
        } catch (error) {
            setError(error.message);
        }
    }
    return (
    <div className="card"> 
        <h2>Sign Up</h2>
        {error && <p> {error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username: 
                <input 
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                {usernameError && <p className="error">{usernameError}</p>} 
            </label>
            <label>
                Password:{" "} 
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}        
                />
                {passwordError && <p className="error">{passwordError}</p>}
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
}

