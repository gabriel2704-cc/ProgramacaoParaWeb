import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const navigate = useNavigate();
    const isAuth = !!localStorage.getItem("usuario");

    return (
        <>
            {
                !isAuth ? (
                    <>
                    <div>
                        <label htmlFor="usuario">Usuario:</label>
                        <br />
                        <input id="usuario" onChange={e => setUsuario(e.target.value)} value={usuario}/>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <button onClick={()=>{
                            localStorage.setItem("usuario", usuario);
                            navigate('/privado');
                        }}>Login</button>
                    </div>
                    </>
                ): 
                (
                    <> 
                        <button onClick={()=> {
                            localStorage.removeItem("usuario");
                            navigate('/');
                        }}>Logout</button>
                    </>
                )
            }
        </>
    )
}

export default Login;