import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './layouts/Home'
import Events from './layouts/Events'
import Recepies from './layouts/Recepies'
import Signin from './layouts/Signin'
import Signup from './layouts/signup';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Home/>} />
    <Route path="/events" element={<Events/>} />
    <Route path="/recipes" element={<Recepies />} />
    <Route path="/signin" element={<Signin/>} />
    <Route path="/signup" element={<Signup/>} />
    </Route>
  )
);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;