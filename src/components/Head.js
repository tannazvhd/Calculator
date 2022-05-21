import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";

export default function CustomizedInputBase() {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        backgroundColor: "transparent",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        disabled
        sx={{ ml: 1, flex: 1 }}
        placeholder="Standard"
        inputProps={{ "aria-label": "Standard" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <AddToPhotosOutlinedIcon color="action" fontSize="small" />
      </IconButton>

      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <RestoreOutlinedIcon color="action" fontSize="small" />
      </IconButton>
    </Paper>
  );
}
