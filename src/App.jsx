import React from "react";
import Form from "./pages/Form";
import FormResult from "./pages/FormResult";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
    },
    {
      path: "/formresult",
      element: <FormResult />,
    }
  ])

  return (
     <RouterProvider router={router} >
      </RouterProvider>
  )
}

export default App;
