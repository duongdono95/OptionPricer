import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import CalendarPage from "../pages/CalendarPage/CalendarPage";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index path="/" element={<Home />} />
      <Route path="widget-calendar" element={<CalendarPage />} />
    </Route>
  )
);
