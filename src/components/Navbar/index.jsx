import "../Style.css"
import icon from "../../picture/icon copy.png"

function Navbar() {

    return (
        <div className="container-navbar">
            <div className="icon-navbar">
                <img src={icon} />
            </div>
            <div className="menu-navbar">
                <ul>
                    <li>Home</li>
                    <li>Tour</li>
                    <li>Destination</li>
                    <li>Activities</li>
                    <li>Pages</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="login-navbar">
                <ul>
                    <li>Sign Up</li>
                    <li>Log in</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar