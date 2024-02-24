import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home'
import Events from './components/Events'
import Recepies from './components/Recepies'
import Signin from './components/Signin'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Home/>} />
    <Route path="/events" element={<Events/>} />
    <Route path="/recipes" element={<Recepies />} />
    <Route path="/signin" element={<Signin/>} />
    </Route>
  )
);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;