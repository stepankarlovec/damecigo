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

export const ProductPageComponent = () => {
  const productLink = "/product/" + 0;
  return (
    <>
      <Card sx={{ maxWidth: 310 }}>
        <Link href={productLink}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="230"
              image="/puk.png"
              alt="product"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                test
              </Typography>
              <Typography variant="body2" color="text.secondary">
                aifaifidskfpodsfpodk
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
};

export default ProductPageComponent;
