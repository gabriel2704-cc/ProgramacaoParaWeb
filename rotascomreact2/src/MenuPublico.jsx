import { NavLink, Outlet } from "react-router";

const MenuPublico = () => {
    return (
        <>
            <ul>
                <li><NavLink exact="true" to="/">Home</NavLink></li>
                <li><NavLink exact="true" to="/usuario">Usuario</NavLink></li>
                <li><NavLink exact="true" to="/login">Login</NavLink></li>
            </ul>
            <Outlet/>
        </>
    )
}

export default MenuPublico;