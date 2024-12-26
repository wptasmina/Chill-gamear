import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Home from "./components/Home";
import AllReviews from "./components/AllReviews";
import ReviewDetails from "./components/ReviewDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import AddReview from "./components/AddReview";
import MyReviews from "./components/MyReviews";
import UpdateReview from "./components/UpdateReview";
import GameWatchlist from "./components/GameWatchlist";
import NotFound from "./components/NotFound";
import Root from "./components/Root";
import { AuthProvider } from "./Context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HighRatedCardDetails from "./HighRatedCardDetails";
import { ThemeProvider } from "./Context/ThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reviews",
        element: <AllReviews />,
      },
      {
        path: "/review/:id",
        element: <ReviewDetails />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-uupdate.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addReview",
        element: <AddReview />,
      },
      {
        path: "/myReviews",
        element: <MyReviews />,
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview />,
      },
      {
        path: "/game-watchlist",
        element: <GameWatchlist />,
      },
      {
        path: "/highRatedCardDetails/:id",
        element: <HighRatedCardDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
    <ToastContainer position="top-center" autoClose={2000} />
  </StrictMode>
);
