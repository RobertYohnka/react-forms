import { useState } from "react"



export default function SignUpForm() {
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");
    const [error, SetError] = useState("");
    
    async function handleSubmit(event) {
        event.preventDefault();
        // console.log("Hello 👋");
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup')
            const result = await response.json();
            console.log(result);
        } catch (error) {
            setError(error.message);
        }
    }
    return (
    <div>
        <h2>Sign Up</h2>
        {error && <p> {error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username: 
                <input 
                    value={username}
                    onChange={(e) => {
                        SetUsername(e.target.value);
                    }}
                />
            </label>
            <label>
                Password:{" "} 
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => {
                        SetPassword(e.target.value);
                    }}        
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
}

