import { Routes, Route } from "react-router-dom";
import routeList from "./routeList";

function AppRoutes() {

    return (
        <Routes>
            {routeList.map((route, index) => {
                return <Route key={index} path={route.path} element={route.element} />
            })}
        </Routes>
    )
}
export default AppRoutes;