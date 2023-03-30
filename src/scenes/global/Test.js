import * as React from "react";
import RightBar from "./RightBar";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import Header from "./Headers";

export default function Test() {
  return (
    <Box style={{ marginTop: "-425px" }}>
      <Box style={{ marginTop: "150px" }}>
        <Box marginLeft="100px">
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
    </Box>
  );
}
