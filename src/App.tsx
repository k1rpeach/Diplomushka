import { LoginPage } from "./pages/LoginPage/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/main",
    element: <MainPage/>
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <RouterProvider router={routerConfig}/>
        </div>
      </div>
    </>
  );
}

export default App;
