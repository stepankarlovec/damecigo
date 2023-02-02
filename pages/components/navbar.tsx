import { Box, Button, Link as MuiLink } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

export const Navbar: FC = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "8rem",
          paddingRight: "8rem",
          justifyContent: "space-around",
          height: "4rem",
          marginTop: "1.5rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid red",
        }}
      >
        <Box>
          <MuiLink href="/">
            <Image
              src="/logo_xs.png"
              width="200"
              height="60"
              alt="logo"
            ></Image>
          </MuiLink>
        </Box>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <MuiLink href="/">Domů</MuiLink>
          <MuiLink href="/products">Rozvoz</MuiLink>
          <MuiLink href="#">O Nás</MuiLink>
          <MuiLink href="#">Podpora</MuiLink>
          <MuiLink href="#">Kontakt</MuiLink>
        </Box>
        <Box>
          <Button variant="contained">Příhlásit se</Button>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
