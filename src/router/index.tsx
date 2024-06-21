import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Follow from "../pages/Follow";
import Rootlayout from "../layout/Rootlayout";

const router: RouteObject[] = [
    {
        path: "/",
        element: <Rootlayout/>,
        children : [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/search",
                element: <Search/>
            },
            {
                path: "/follow",
                element: <Follow/>
            },
            {
                path: "/profile",
                element: <Profile/>
            },
        ]
    }
]

export default router;