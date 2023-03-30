import * as React from "react";
import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ColorModeContext, tokens } from "../../theme";
import { styled, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import SearchIcon from "@mui/icons-material/Search";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Scroll from "./Scroll";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { Link } from "react-router-dom";


const drawerWidth = 210;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Scroll> </Scroll>
      <>
        <Box sx={{ display: "flex", color: "#050101" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <Box>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 5,
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <Box display="flex" justifyContent="space-between" p={2}></Box>
              {/* SEARCH BAR */}
              <Box display="flex" backgroundColor="#000000" borderRadius="18px">
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                  <SearchIcon />
                </IconButton>
              </Box>
              {/* Icons */}
              <Box sx={{ position: "absolute", right: 0 }}>
                <IconButton onClick={colorMode.togColorMode}>
                  {theme.palette.mode === "#050105" ? (
                    <DarkModeOutlinedIcon />
                  ) : (
                    <LightModeOutlinedIcon />
                  )}
                </IconButton>

                <IconButton>
                  <NotificationsOutlinedIcon />
                </IconButton>

                <IconButton>
                  <SettingsOutlinedIcon />
                </IconButton>

                <IconButton>
                  <AccountCircleOutlinedIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {["Dashboard", "Comments", "Groups", "Scrapbooks"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding sx={{ display: "flex" }}>
                    <Link to={`/${text}`}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {(() => {
                            switch (index % 4) {
                              case 0:
                                return <DashboardIcon />;

                              case 1:
                                return <PersonOutlineOutlinedIcon />;
                              case 2:
                                return <GroupOutlinedIcon />;
                              case 3:
                                return <MenuBookOutlinedIcon />;
                              default:
                                return null;
                            }
                          })()}
                        </ListItemIcon>

                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
          </Box>
        </Box>
      </>
    </>
  );
}