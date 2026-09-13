import React from 'react';
import '../assets/style.css';

const Header = () => {
    const logout = async (e) => {
        e.preventDefault();
        let logout_url = "/djangoapp/logout";
        const res = await fetch(logout_url, { method: "GET" });
        const json = await res.json();
        if (json) {
            let username = sessionStorage.getItem('username');
            sessionStorage.removeItem('username');
            window.location.href = window.location.origin;
            window.location.reload();
            alert("Logging out " + username + "...");
        }
    };

    let username = sessionStorage.getItem('username');
    let home_page = "/dealers";

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: "lightskyblue", padding: "10px" }}>
            <div className="container-fluid">
                <h2 style={{ paddingRight: "5%" }}>Dealerships</h2>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-links me-auto mb-2 mb-lg-0" style={{ display: "flex", gap: "15px", listStyle: "none", margin: 0 }}>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ fontSize: "larger" }} href={home_page}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ fontSize: "larger" }} href="/about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ fontSize: "larger" }} href="/contact">Contact Us</a>
                        </li>
                    </ul>
                    <span className="navbar-text" style={{ marginLeft: "auto" }}>
                        {username ? (
                            <div className="login_panel">
                                <span className="username" style={{ fontSize: "larger", marginRight: "10px" }}>{username}</span>
                                <a className="nav_item" href="/djangoapp/logout" onClick={logout} style={{ fontSize: "larger" }}>Logout</a>
                            </div>
                        ) : (
                            <div className="login_panel">
                                <a className="nav_item" href="/login" style={{ fontSize: "larger", marginRight: "10px" }}>Login</a>
                                <a className="nav_item" href="/register" style={{ fontSize: "larger" }}>Register</a>
                            </div>
                        )}
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Header;
