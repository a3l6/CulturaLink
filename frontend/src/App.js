import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './layouts/Home'
import Events from './layouts/Events'
import Recepies from './layouts/Recepies'
import Signup from './layouts/Signup'
import Form from './layouts/Signin';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Home/>} />
    <Route path="/events" element={<Events/>} />
    <Route path="/recipes" element={<Recepies />} />
    <Route path="/login" element={<Form/>} />
    <Route path="/Signup" element={<Signup/>}/>
    </Route>
  )
);

function App() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
}

export default App;