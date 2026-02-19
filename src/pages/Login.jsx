import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login({setIsLoggedIn}) {
    const [email, setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [error,setError]=useState("");
 const navigate = useNavigate();
    const handleLogin = (e)=>{
        e.preventDefault();
        if(email === "admin@example.com" && password === "password123"){
            
            setIsLoggedIn(true);
            navigate("/DashBordLayouts");
        }else{
            setError("Invalid email or password");
        }
    }
    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    {error && <p className="error-message">{error}</p>}
                    <div className="form-group">
                        <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    
                     <div className="form-group">
                        <label>password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="login-button">Login</button>
                </form>

            </div>
        </div>
    )
}
export default Login;