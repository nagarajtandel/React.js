import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";

const AppLayout = () => {
  console.log(<Body/>)
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element: <Body />,

      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement:<Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
































// const parent=React.createElement(
//     "div",
//     {id:"parent"},[
//         React.createElement("div", {id:"child"},[
//             React.createElement("h1",{},"This is react.js"),
//             React.createElement("h2",{},"helo!!"),
//       ]  ),
//       React.createElement("div", {id:"child"},[
//         React.createElement("h1",{},"Im an h1 tag"),
//         React.createElement("h2",{},"Im an h2 tag"),
//       ]),
//     ]);





// const heading = React.createElement(
//     "h1",
//     { id:"heading"},
//     "hello world from react!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);






// import React from "react";
// import ReactDOM from "react-dom/client";





// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
