import React, {useEffect, useState} from 'react'
import './Nav.css';

function Nav() {

    const [show, setShow] = useState(false);
    
    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true)
            } else {
                setShow(false)
            }
        })

        return () => {
            window.removeEventListener("scroll");
        };


    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="Netflix Logo"
            />
            <img
                className="nav_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Avatar"
            />
        </div>
    )
}

export default Nav
