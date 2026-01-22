// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Personajes } from "./pages/Personajes";
import { DescripcionPersonaje } from "./pages/DescripcionPersonaje";
import { DescripcionPlanetas } from "./pages/DescripcionPlanetas";
import { DescripcionVehiculos } from "./pages/DescripcionVehiculos";
import { Planetas } from "./pages/Planetas";
import { Vehicles } from "./pages/Vehicles";

export const router = createBrowserRouter(
  createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

    // Root Route: All navigation will start from here.
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

      {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
      <Route path="/" element={<Personajes />} />
      <Route path="/DescripcionPersonaje/:theId" element={<DescripcionPersonaje />} />  {/* Dynamic route for single items */}
      <Route path="/DescripcionPlanetas/:theId" element={<DescripcionPlanetas />} />  {/* Dynamic route for single items */}
      <Route path="/DescripcionVehiculos/:theId" element={<DescripcionVehiculos />} />  {/* Dynamic route for single items */}

      <Route path="/planetas" element={<Planetas />} />
      <Route path="/vehicles" element={<Vehicles />} />
    </Route>
  )
);