import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  RootLayout,
  Home,
  Registration,
  Login,
  Error,
  Admin,
  GetAllBooks,
  AddBook,
  EditBook,
} from "./pages";

import { loader as homeLoader } from "./pages/Home";
import { action as registrationAction } from "./pages/Registration";
import { action as loginAction } from "./pages/Login";
import { action as addBookAction } from "./pages/AddBook";
import { loader as allBookLoader } from "./pages/GetAllBooks";
import { loader as editBookLoader } from "./pages/EditBook";
import { action as editBookAction } from "./pages/EditBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Home />,
        loader: homeLoader,
        children: [
          {
            index: true,
            element: <GetAllBooks />,
            loader: allBookLoader,
          },
          {
            path: "addBook",
            element: <AddBook />,
            action: addBookAction,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "edit-book/:id",
            element: <EditBook />,
            loader: editBookLoader,
            action: editBookAction,
          },
        ],
      },
      {
        path: "registration",
        element: <Registration />,
        action: registrationAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
