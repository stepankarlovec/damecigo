import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Link as MuiLink,
  Menu,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuthContext } from "@/context/auth-context-provider";

export const Navbar: FC = () => {
  let user = useAuthContext().user;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
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
          <Hidden mdUp>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden xsDown></Hidden>
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
            {!user ? (
              <Button variant="contained">
                <MuiLink href="/login" sx={{ color: "white" }}>
                  Příhlásit se
                </MuiLink>
              </Button>
            ) : (
              <>
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{ color: "white" }}
                >
                  {user.email}
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleClose}>Můj účet</MenuItem>
                  <MenuItem onClick={handleClose}>Nastavení</MenuItem>
                  <MenuItem onClick={() => user.signOut()}>
                    Odhlásit se
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Box>
      </AppBar>
    </>
  );
};
export default Navbar;
