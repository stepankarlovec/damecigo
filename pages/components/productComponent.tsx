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
import React, { FC } from "react";

export const ProductComponent: FC<productComponent> = (props) => {
  const productLink = "/product/" + props.id;
  return (
    <>
      <Card sx={{ maxWidth: 310 }}>
        <Link href={productLink}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="230"
              image={props.image}
              alt="product"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
};

export default ProductComponent;
