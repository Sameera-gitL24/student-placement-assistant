import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <nav>
            <h2>Student Placement Assistant</h2>

            <div>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/skill-gap">Skill Gap</Link>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;