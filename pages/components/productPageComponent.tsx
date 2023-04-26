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

type ProductPage = {
  name: string;
  description: string;
  image: string;
};

export const ProductPageComponent = (props: ProductPage) => {
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
          <Image src={props.image} alt="asd" width="450" height="350" />

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
            <Typography variant="h3">{props.name}</Typography>
            <Typography variant="body1" color="text.secondary" marginTop="1rem">
              {props.description}
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
