import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon, // Missing comma added here
  Search as SearchIcon,
} from "@mui/icons-material";
import React, { useState } from "react";
import { orange } from "../constants/color";
import { useNavigate } from "react-router-dom";

// Define IconBtn component before usage
const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };

  const navigateToGroup = () => {
    navigate("/groups");
  };

  const LogoutHandler = () => {
    console.log("Logout");
  };

  return (
    <Box sx={{ flexGrow: 1, height: "4rem" }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: orange,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            GupShup
          </Typography>

          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton color="inherit" onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
            }}
          />

          <Box>
            <IconBtn
              title={"Search"}
              icon={<SearchIcon />}
              onClick={openSearch}
            />

            <IconBtn
              title={"New Group"}
              icon={<AddIcon />}
              onClick={openNewGroup}
            />

            <IconBtn
              title={"Manage Groups"}
              icon={<GroupIcon />}
              onClick={navigateToGroup}
            />

            <IconBtn
              title={"Logout"}
              icon={<LogoutIcon />}
              onClick={LogoutHandler}
            />

            <IconBtn
              title={"Notifications"}
              icon={<NotificationsIcon />}
              onClick={openNotification}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
