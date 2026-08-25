import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router";
import Menu from "./Menu";
import Home from "./Home";
import Rotas from "./Rotas";
import Sobre from "./Sobre";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Menu/>,
    children : [
        {
          index : true, 
          element : <Home/>
        },
        {
          path : "rotas",
          element : <Rotas/>
        }, 
        {
          path : "rotas/:id",
          element : <Rotas/>
        },         
        {
          path : "sobre",
          element : <Sobre/>
        }, 
        {
          path : "*",
          element : <NotFound/>
        }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
