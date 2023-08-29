import { useState, useEffect } from "react";

import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home.jsx";
import { MovieDetails } from './pages/MovieDetails.jsx';
import { About } from "./pages/About.jsx";
import { Mission } from "./pages/Mission.jsx";
import { Signin } from "./pages/Signin.jsx";

// React Router
import { createHashRouter, RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
// Styles
import "./App.css";

const router = createHashRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/mission",
        element: <Mission />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/movie/:movieId",
        element: <MovieDetails />,
      },
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router}/>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
