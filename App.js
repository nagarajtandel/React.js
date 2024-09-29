const parent=React.createElement(
    "div",
    {id:"parent"},[
        React.createElement("div", {id:"child"},[
            React.createElement("h1",{},"Im an h1 tag"),
            React.createElement("h2",{},"Im an h2 tag"),
      ]  ),
      React.createElement("div", {id:"child"},[
        React.createElement("h1",{},"Im an h1 tag"),
        React.createElement("h2",{},"Im an h2 tag"),
      ]),
    ]);





const heading = React.createElement(
    "h1",
    { id:"heading"},
    "hello world from react!"
);
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);






// import React from "react";
// import ReactDOM from "react-dom/client";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/b3e73495988751.5ea42985a318a.jpg"
//           alt="Logo"
//         />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
