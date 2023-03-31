import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/home/Home";
import SmartHouseDetail from "../pages/smart-house-detail/SmartHouseDetail";

export default function MainRouter() {
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path="/" errorElement={<ErrorPage />} element={<UserLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/smart-house" element={<SmartHouseDetail />}></Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}
