import { NavLink, Outlet } from "react-router";

const MenuPrivado = () => {
    return (
        <>
            <ul>
                <li><NavLink exact="true" to="/privado">Home</NavLink></li>
                <li><NavLink exact="true" to="usuario">
                    Usuario: {localStorage.getItem("usuario")}</NavLink>
                </li>
                <li><NavLink exact="true" to="login">Logout</NavLink></li>
            </ul>
            <Outlet/>
        </>
    )
}

export default MenuPrivado;