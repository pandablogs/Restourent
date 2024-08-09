import { useState,useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CategoryIcon from '@mui/icons-material/Category';

import { setActiveComponent } from "../../redux/slices/tab/tabSlice";
import { getUserProfileData } from "../../utills/utills";

const Item = ({ title, icon, selected, onClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={onClick}
      icon={icon}
    >

      <Typography>{title}</Typography>

    </MenuItem>
  );
};

const Sidebar = () => {
  
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsCollapsed(window.innerWidth <= 768); 
    }
    handleResize();
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, []); 


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const activeComponent = useSelector(state => state.tab.activeComponent);

  const handleSetActiveComponent = (component) => {
    dispatch(setActiveComponent(component));
  }

  // const AdminData = JSON.parse(localStorage.getItem("loggedIn"))
  // const AdminName = AdminData.adminName.toUpperCase();

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
      {/* SuperAdmin Menu */}
      {getUserProfileData().role == 'SuperAdmin' &&
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Dashboard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`} 
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Super Admin
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              setActiveComponent='Dashboard'
              icon={<HomeOutlinedIcon />}
              selected={activeComponent === 'Dashboard'}
              onClick={() => handleSetActiveComponent('Dashboard')}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
              <Item
              title="Hotels"
              icon={<PersonSearchIcon />}
              selected={activeComponent === 'Users'}
              onClick={() => handleSetActiveComponent('Users')} />
            
          </Box>
        </Menu>
      }

      {/* RestaurantAdmin Menu */}
      {getUserProfileData().role == 'RestaurantAdmin' && 
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`} 
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Restaurant Admin
                </Typography>
              </Box>
            </Box>
          )}
           
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              setActiveComponent='Dashboard'
              icon={<HomeOutlinedIcon />}
              selected={activeComponent === 'Dashboard'}
              onClick={() => handleSetActiveComponent('Dashboard')}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
              <Item
              title="Menu Category"
              icon={<CategoryIcon />}
              selected={activeComponent === 'MenuCategory'}
              onClick={() => handleSetActiveComponent('MenuCategory')} />
          </Box>
        </Menu>
      }
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
