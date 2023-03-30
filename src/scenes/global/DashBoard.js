import * as React from "react";
import RightBar from "./RightBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stats from "../../Stats/Stats";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Comments from "./Comments";
import Daily_stats from "../../Stats/Daily_stats";
import Minibox from "./Minibox";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "./Headers";
import Scrapbooks from "../../Stats/Scrapbooks";
import Grp from "../../Stats/Grp";
import User_growth from "../../Stats/User_growth";
import Charts from "../../Stats/Charts";
import Daily_Scrapbooks from "../../Stats/Daily_Scrapbooks";
import Tags from "../../Stats/Tags";
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TagIcon from '@mui/icons-material/Tag';
import New_Groups from "../../Stats/New_Groups";
import Notification from "../../Stats/Notification";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box style={{ marginTop: "-425px" }}>
        <Box style={{ marginTop: "150px" }}>
          <Box  marginLeft= "100px">
            {/* HEADER */}
            <Box
              style={{
                margin: "0px 0px 0px, auto",
                marginRight: "1000px",
                width: "200px",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Header title="Novella" subtitle="Admin Panel Dashboard" />
            </Box>
          </Box>
        </Box>

        <Box
          style={{
            margin: "0px 0px 0px auto",
            marginRight: "px",
            marginLeft: "100px",
            width: "1400px",
          }}
          display="grid"
          gridTemplateColumns="repeat(24, 1fr)"
          gridAutoRows="170px"
          gap="20px"
        >
          <Box
            gridColumn="span 6"
            backgroundColor={colors.indigo[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Minibox
              title={Stats()}
              subtitle="Total Users"
              icon={
                <PersonIcon 
                  sx={{ color: "#C3B1E1", fontSize: 80,position:"absolute",marginLeft:-8 }} />
              }
            />
          </Box>
          <Box
            gridColumn="span 6"
            backgroundColor={colors.indigo[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Minibox
              title={Scrapbooks()}
              subtitle="Total Scrapbooks"
              icon={
                <MenuBookIcon 
                  sx={{ color: "#C3B1E1", fontSize: 80,position:"absolute",marginLeft:-8 }} />
              }
            />
          </Box>
          <Box
            gridColumn="span 6"
            backgroundColor={colors.indigo[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Minibox
              title={Grp()}
              subtitle="Total Groups"
              icon={
                <GroupIcon 
                  sx={{ color: "#C3B1E1", fontSize: 80,position:"absolute",marginLeft:-8 }} />
              }
            />
          </Box>
          <Box
            gridColumn="span 6"
            backgroundColor={colors.indigo[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Minibox
              title={Tags()}
              subtitle="Total Tags"
              icon=
              {<TagIcon 
                sx={{ color: "#C3B1E1", fontSize: 80,position:"absolute",marginLeft:-8 }} />}
            />
          </Box>

          <Box
            gridColumn="span 12"
            gridRow="span 2"
            backgroundColor={colors.indigo[100]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box >
                <Typography
                  alignItems="center" justifyContent="center"
                  variant="h5"
                  fontWeight="600"
                  color={colors.indigo[950]}
                  p="30px 50px"
                >
                  <Typography></Typography>
                  User Growth
                  {Charts()}
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.indigo[950]}
                ></Typography>
              </Box>
              <Box></Box>
            </Box>
            <Box height="250px" m="-20px 0px 0px 0px"></Box>
          </Box>
          <Box
            gridColumn="span 12"
            gridRow="span 2"
            backgroundColor={colors.indigo[100]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.indigo[950]}`}
              colors={colors.indigo[950]}
              p="15px 190px"
            >
              <Typography
                color={colors.indigo[950]}
                variant="h5"
                fontWeight="600"
              >
                {User_growth()}
              </Typography>
            </Box>
          </Box>

          <Box
            gridColumn="span 6"
            backgroundColor={colors.indigo[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Minibox
              title={Daily_stats()}
              subtitle="New Users"
              icon={
                <PersonIcon
                  sx={{ color: "#C3B1E1", fontSize: 80,position:"absolute",marginLeft:-8 }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 6"
            backgroundColor={colors.indigo[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Minibox
              title={Daily_Scrapbooks()}
              subtitle="New Scrapbooks"
              icon={
                <MenuBookIcon 
                  sx={{ color: "#C3B1E1", fontSize: 80,position:"absolute",marginLeft:-8 }} />
              }
            />
          </Box>
          <Box
            gridColumn="span 6"
            backgroundColor={colors.indigo[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Minibox
              title=  {New_Groups()}
              subtitle="New Groups"
              icon={
                <PersonAddIcon 
                 sx={{ color: "#C3B1E1", fontSize: 80,position:"absolute",marginLeft:-8 }} />
              }
            />
          </Box>
          <Box
            gridColumn="span 6"
            backgroundColor={colors.indigo[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Minibox
              title={Notification()}
              subtitle="Total Notifications"
              icon={<TagIcon 
                sx={{ color: "#C3B1E1", fontSize: 80,position:"absolute",marginLeft:-8 }} />}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;