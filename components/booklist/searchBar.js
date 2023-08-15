import React, { useState, useRef, useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar() {
  const [sortOption, setSortOption] = useState("popular");

  const handleSortChange = (event, newSortOption) => {
    if (newSortOption !== null) {
      setSortOption(newSortOption);
    }
  };

  //검색창을 위한 스크립트
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Handle search logic here (e.g., perform search using searchTerm)
    console.log("Searching for:", searchTerm);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: 150,
        backgroundColor: "white",
        pt: 10,
        display: "flex",
        justifyContent: "center",
        pl: 3,
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "right",
        }}
      >
        <ToggleButtonGroup
          value={sortOption}
          exclusive
          onChange={handleSortChange}
          aria-label="Sort options"
          sx={{ whiteSpace: "nowrap" }}
        >
          <ToggleButton
            value="popular"
            aria-label="Popular"
            sx={{
              fontSize: "12px",
              padding: "2px 10px",
              height: "50px",
              "&.Mui-selected": {
                backgroundColor: "gray",
                color: "white",
              },
            }}
          >
            인기순
          </ToggleButton>
          <ToggleButton
            value="latest"
            aria-label="Latest"
            sx={{
              fontSize: "12px",
              padding: "2px 10px",
              height: "50px",
              "&.Mui-selected": {
                backgroundColor: "gray",
                color: "white",
              },
            }}
          >
            최신순
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box
        sx={{
          display: "flex",
          pl: 3,
          flex: 5,
          mr: 10,
          justifyContent: "center",
        }}
      >
        <InputBase
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: "80%",
            borderRadius: "4px",
            backgroundColor: "#f0f0f0",
            paddingLeft: "10px",
            marginRight: "10px",
            height: "50px",
          }}
        />
        <IconButton
          onClick={handleSearch}
          aria-label="search"
          sx={{
            padding: "10px",
            backgroundColor: "#007BFF",
            borderRadius: "4px",
            height: "50px",
            backgroundColor: "gray",
          }}
        >
          <SearchIcon style={{ color: "#fff" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
