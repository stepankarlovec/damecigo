import { Box, TextField } from "@mui/material";
import React from "react";
import Navbar from "../components/navbar";

const CreateProduct = () => {
  return (
    <>
      <Navbar></Navbar>
      <Box>
        <TextField
          type="text"
          variant="outlined"
          placeholder="Name"
        ></TextField>
      </Box>
    </>
  );
};

export default CreateProduct;
