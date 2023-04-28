import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

//Import de paginas para seguir com as rotas
import Home from './routes/Home';
import NewPost from './routes/NewPost';
import Mod from './routes/Mod';

import './index.css'

const router = createBrowserRouter([//faz a rota de navegação das páginas/definindo rota das páginas
  {
    element: <App />,//Conteúdo principal/Container da aplicação toda
    children: [
      {
        path: "/",
        element: <Home />//rotas que vão ser alteradas
      },
      {
        path: "/new",
        element: <NewPost />
      },
      {
        path: "/mod",
        element: <Mod />
      },
    ],
  },
])

//Inserindo as rotas no projeto
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router = {router} /> 
  </React.StrictMode>,
)
