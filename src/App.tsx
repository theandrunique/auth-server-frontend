import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmailConfirm from "./components/EmailConfirm";
import { Paths } from "./paths";
import EmailVerified from "./components/EmailVerified";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: Paths.home, 
    element: <h1>Auth Server</h1>
  },
  {
    path: Paths.emailConfirm,
    element: <EmailConfirm />,
  },
  {
    path: Paths.emailVerified,
    element: <EmailVerified />
  },
  {
    path: Paths.error,
    element: <Error />
  }
])

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App