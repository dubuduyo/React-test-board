import React, { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  return (
    <Suspense fallback={<div>...is loading</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

// routes
// board component
// api connect
