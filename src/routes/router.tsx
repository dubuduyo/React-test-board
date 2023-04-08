import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "board",
    // TODO: 아래 element 값을 Board 컴포넌트로 대체해주세요.
    element: <div>board</div>,
  },
]);
