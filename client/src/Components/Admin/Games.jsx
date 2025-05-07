import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Live.css";
import AdminUser from './AdminUser';

const Games = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const email = location.state?.email;

    console.log('Games email:', email);  // Debugging line

    if (!email) {
        return <div>Email not provided</div>;
    }

    const handleGameSelection = (game) => {
        if (game === "kabaddi") {
            navigate("/adminlive", { state: { email } });
        } else if (game === "volleyball") {
            navigate("/volleyball", { state: { email } });
        }
    };

    return (
        <div>
            <div className="navbar">
                <button onClick={() => handleGameSelection("kabaddi")} className="dropdown-button">
                    KABADDI
                </button>
                <button onClick={() => handleGameSelection("volleyball")} className="dropdown-button">
                    VOLLEYBALL
                </button>
            </div>
            <AdminUser email={email} />
        </div>
    );
};

export default Games;
