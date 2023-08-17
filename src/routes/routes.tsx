import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import CalendarPage from "../pages/CalendarPage/CalendarPage";
import TestFunction from "../pages/CalendarPage/components/WCFunctions/TestFunction/TestFunction";
import WeekCalculator from "../pages/CalendarPage/components/WCFunctions/WeekCalculator/WeekCalculator";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="widget-calendar" element={<CalendarPage />}>
        <Route index element={<WeekCalculator />} />
        <Route path="test" element={<TestFunction />} />
      </Route>
    </Route>
  )
);
