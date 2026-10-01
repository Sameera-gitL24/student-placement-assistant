import { useState } from "react";
import { registerUser } from "../services/api";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const data = await registerUser({
                name,
                email,
                password
            });

            setMessage(data.message);
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <h2>Student Placement Assistant</h2>
            <h3>Register</h3>

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

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

                <button type="submit">Register</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;