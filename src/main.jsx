import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Login from './components/auth/login/Login.jsx';
import Register from './components/auth/register/Register.jsx';
import { store } from './store/store.js';
import { Provider } from 'react-redux';

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <App />,
},
{
   path: "/login",
  element: <Login />,
},
{
   path: "/register",
  element: <Register />,
},
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={appRouter} />,
    </Provider>,
)
