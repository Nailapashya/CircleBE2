import {Home, HomeOutlined,
    PersonSearch, PersonSearchOutlined,
    FavoriteBorderOutlined, FavoriteOutlined,
    AccountCircleOutlined, AccountCircle
} from "@mui/icons-material"
import {Box, Typography} from "@mui/material"
import { NavLink } from "react-router-dom";

const MENU = [
    {
        name: "Home",
        path: "/",
        icon: {
            active: <Home/>,
            nonActive: <HomeOutlined/>
        }
    },
    {
        name: "Search",
        path: "/search",
        icon: {
            active: <PersonSearch/>,
            nonActive: <PersonSearchOutlined/>
        }
    },
    {
        name: "Follow",
        path: "/follow",
        icon: {
            active: <FavoriteOutlined/>,
            nonActive: <FavoriteBorderOutlined/>
        }
    },
    {
        name: "Profile",
        path: "/profile",
        icon: {
            active: <AccountCircle/>,
            nonActive: <AccountCircleOutlined/>
        }
    },
]

const MenuItem = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {MENU.map((item, index) => (
        <NavLink key={index} to={item.path}>
          {({ isActive }) => (
            <Box
              color={isActive ? "#fff" : "rgba(255, 255, 255, 0.6)"}
              display={"flex"}
              alignItems={"center"}
              sx={{ textDecoration: "none" }}
              fontSize={50}
            >
              {isActive ? item.icon.active : item.icon.nonActive} {" "}
              <Typography fontSize={20}>{item.name}</Typography>
            </Box>
          )}
        </NavLink>
      ))}
    </Box>
  );
}

export default MenuItem