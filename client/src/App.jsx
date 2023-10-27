import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout, Home, Registration, Login, Error, Admin, GetAllBooks } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Home />,
        children: [
          {
            index: true,
            path: ".",
            element: <GetAllBooks />
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
