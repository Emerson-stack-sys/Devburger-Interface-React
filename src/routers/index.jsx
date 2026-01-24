import { createBrowserRouter } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {Cart, Home, Login, Menu, Register} from '../containers';

export const router = createBrowserRouter([

     {
          path: '/',
          element: (
                <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />

        <main style={{ flex: 1 }}>
          <Home />
        </main>

        <Footer />
      </div>

          ),
     },
     {
          path: '/login',
          element: <Login />,
     },
     {
          path: '/cadastro',
          element: <Register />,
     },

     {
          path: '/cardapio',
          element: (
               <>
                    <Header />
                    <Menu />
               </>

          ),
     },
     {
     path: '/carrinho',
          element: (
               <>
                    <Header />
                    <Cart />
               </>

          ),
     },

]);