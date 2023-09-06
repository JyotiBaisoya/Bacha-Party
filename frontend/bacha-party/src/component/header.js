import React, { useState, useEffect } from "react";
import "../css/header.css"
function Header() {
    const [name, setName] = useState(localStorage.getItem("name"));

    useEffect(() => {
        // This effect will run whenever the localStorage name changes
        const storedName = localStorage.getItem("name");
        setName(storedName);
    }, [])

    function handleLogout(e) {

        e.preventDefault()
        localStorage.removeItem("name")
        localStorage.removeItem("token");
        setName(null);
    }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  
    return (
        <header className="header">
            <div className="logo"><a href="/">Nanhe-Munhe</a></div>
            <nav className="nav">
              

                <div
                    className="dropdown-container"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <a href="/products">Products</a>
                    {isDropdownOpen && (
                        <div
                            className="dropdown-content"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <a href="/girls-special">Girls Special</a>
                            <a href="/boys-special">Boys Special</a>
                        </div>
                    )}
                </div>
                <a href="/cart">Cart</a>
                {name && <button className="button" >{name}</button>}
                {name && (<button className="button" onClick={handleLogout}>Logout</button>)}
                {!name && <a href="/login">Login/Register</a>}
                {name && <button className="button"> <a href="/orders">Your Orders</a></button>}
            </nav>
        </header>
    )
}

export default Header