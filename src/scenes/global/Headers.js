// import { Typography, Box, useTheme } from "@mui/material";
// import { tokens } from "../../theme";

// const Header = ({ title, subtitle }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <Box mb="30px">
//       <Typography
//         variant="h2"
//         color="#C3B1E1"
//         fontWeight="bold"
//         sx={{ m: "0 0 5px 0" }}
//       >
//         {title}
//       </Typography>
//       <Typography variant="h5" color={"#C3B1E1"}>
//         {subtitle}
//       </Typography>
//     </Box>
//   );
// };

// export default Header;

import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color="#C3B1E1"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={"#C3B1E1"}>
        {subtitle} 
        
      </Typography>
    </Box>
  );
};

export default Header;