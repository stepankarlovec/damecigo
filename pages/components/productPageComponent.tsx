import { productComponent } from "@/utility/types";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Counter from "./counter";

export const ProductPageComponent = () => {
  const productLink = "/product/" + 0;
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "8px",
          }}
        >
          <Image src="/puk.png" alt="asd" width="450" height="350" />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "750px",
              height: "100%",
              backgroundColor: "whitesmoke",
              padding: "16px",
            }}
          >
            <Typography variant="h3">Test product</Typography>
            <Typography variant="body1" color="text.secondary" marginTop="1rem">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer
              imperdiet lectus quis justo. Maecenas aliquet accumsan leo.
              Phasellus rhoncus. Sed convallis magna eu sem. Aliquam erat
              volutpat. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Counter></Counter>
            <Button variant="contained">Vložit do košíku</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductPageComponent;
