// ! Ways to Routing
// 1. BrowserRouter v<6 (legecy -old )
// We need to import three components from react-router-dom library

//? 1. <BrowserRouter></BrowserRouter> -> It is the wrapper compont, it will wrap our application to provide routing in the react application, it uses location and history api

//? 2. <Routes></Routes> => This component is used inside browser router, it will wrap all the route components, it will change view based on path

//? 3. <Route></Route> => Route is used to specify that which component should be rendered based on path, it has two props

// a. path => It specifies the path address
// b. element => It specifies the component to be rendered on that specific path

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CourseList from "./pages/CourseList";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import Cart from "./pages/Cart";
// import CourseDetails from "./pages/CourseDetails";
// import AddCourse from "./pages/AddCourse";
// import Navbar from "./components/navbar/Navbar";
// import PageNotFound from "./pages/PageNotFound";

// const App = () => {
//   return (
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<CourseList />}></Route>
//           <Route path="/login" element={<Login />}></Route>
//           <Route path="/signup" element={<SignUp />}></Route>
//           <Route path="/cart" element={<Cart />}></Route>
//           <Route path="/course" element={<CourseDetails />}></Route>
//           <Route path="/addcourse" element={<AddCourse />}></Route>
//           <Route path="*" element={<PageNotFound />}></Route>
//         </Routes>
//       </BrowserRouter>
//   );
// };

// export default App;

// 2. createBrowserRouter v6.4 (latest)
// It is used to do the configuration of routing using objects
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseList from "./pages/CourseList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import CourseDetails from "./pages/CourseDetails";
import AddCourse from "./pages/AddCourse";
import Navbar from "./components/navbar/Navbar";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./pages/Layout";
let myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CourseList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/course",
        element: <CourseDetails />,
      },
      {
        path: "/addcourse",
        element: <AddCourse />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={myRouter}></RouterProvider>;
};

export default App;
