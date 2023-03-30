// import { Box, Typography, useTheme } from "@mui/material";
// import { tokens } from "../../theme"


// const Minibox = ({ title, subtitle, icon,icons, progress, increase }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <Box width="100%" m="0 30px">
//       <Box display="flex" justifyContent="space-between">
//         <Box>
          
//           <Typography
//             variant="h2"
//             fontWeight="bold"
//             sx={{ color: "#C3B1E1" }}
//           >
//             {title}
//           </Typography>
//         </Box>
//         <Box>
//           {icon}
//         </Box>
//       </Box>
//       <Box display="flex" justifyContent="space-between" mt="2px" >
//         <Typography variant="h5" sx={{ color:"#C3B1E1" }}>
//           {subtitle}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Minibox;

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme"


const Minibox = ({ title, subtitle, icon,icons, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ color: "#C3B1E1" }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          {icon}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px" >
        <Typography variant="h5" sx={{ color:"#C3B1E1" }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default Minibox;