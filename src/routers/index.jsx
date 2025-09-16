import { createBrowserRouter } from "react-router-dom";
import { Login } from "../containers/Login";
import { Register } from "../containers/Register";

export const router = createBrowserRouter([
     {
          path: '/',
          element: <Login />,
     },
     {
          path: '/cadastro',
          element: <Register />,
     },

]);