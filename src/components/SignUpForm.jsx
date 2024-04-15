import { useState } from "react"



export default function SignUpForm() {
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");
    // const [error, SetError] = useState("");
    
    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Hello 👋");
    }
    return (
    <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Username:{" "} 
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

