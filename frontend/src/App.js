<<<<<<< HEAD
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
=======
import React from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import Home from './pages/home/Home';
import Events from './pages/events/Events';
import Recipes from './pages/recepies/Recepies';
import Signin from './pages/signin/Signin';
import { Articles } from './pages/articles/Articles';
import { DetailsPages } from "./pages/details/DetailsPages";
import { Account } from "./pages/account/Account";
import { Create } from "./components/create/Create";
import Signup from "./pages/signup/Signup";
import Navbar from "./pages/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  return (
    <>
      <HeaderOrNavbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Signin} />
        <Route exact path='/details/:id' component={DetailsPages} />
        <Route exact path='/account' component={Account} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/articles' component={Articles} />
      </Switch>
      <Footer />
    </>
  );
};

const HeaderOrNavbar = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/signup' && location.pathname !== '/login' && location.pathname !== '/' && <Header />}
      {(location.pathname === '/signup' || location.pathname === '/login' || location.pathname === '/') && <Navbar />}
    </>
  );
};

export default App;
>>>>>>> anreet3
