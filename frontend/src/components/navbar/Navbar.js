import {NavLink} from "react-router-dom";
import "./ctyle.css"
import BtnDarkMode from "../btnDarkMode/btnDarkMode";
function Navbar() {

    const activeLink = "nav-list__link nav-list__link--active"
    const normalLink = "nav-list__link"

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>APPLICATION</strong>.LOC
                    </NavLink>
                    <BtnDarkMode></BtnDarkMode>
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Contacts
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/login" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/register" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Register
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/logout" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Logout
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/profile" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
