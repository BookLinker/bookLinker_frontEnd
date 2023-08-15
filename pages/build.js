import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { useRouter } from "next/router";
import TopNavigationBar from "@/components/common/topNavigationBar";

function Build() {
  const router = useRouter();

  return (
    <Box>
      <TopNavigationBar />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          pt: 8,
          flexDirection: "row",
          backgroundColor: "white",
          flexWrap: "wrap",
        }}
      ></Box>
    </Box>
  );
}

export default Build;
