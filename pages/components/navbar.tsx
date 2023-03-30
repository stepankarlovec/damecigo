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

  const [openMenu, setOpenMenu] = React.useState(false);
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
            paddingLeft: ["0rem", "0rem", "0rem", "8rem"],
            paddingRight: ["0rem", "0rem", "0rem", "8rem"],
            justifyContent: "space-around",
            height: "4rem",
            marginTop: "1.5rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid red",
          }}
        >
          <Hidden mdDown>
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
          </Hidden>
          <Hidden mdUp>
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
            <IconButton
              onClick={() =>
                openMenu ? setOpenMenu(false) : setOpenMenu(true)
              }
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Box>
        <Hidden mdUp>
          {openMenu ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingLeft: ["0rem", "0rem", "0rem", "8rem"],
                paddingRight: ["0rem", "0rem", "0rem", "8rem"],
                justifyContent: "space-around",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                backgroundColor: "#ce0022",
              }}
            >
              <MuiLink
                sx={{
                  padding: "8px",
                  color: "white",
                  ":hover": { color: "gray" },
                }}
                href="/"
              >
                Domů
              </MuiLink>
              <MuiLink
                sx={{
                  padding: "8px",
                  color: "white",
                  ":hover": { color: "gray" },
                }}
                href="/products"
              >
                Rozvoz
              </MuiLink>
              <MuiLink
                sx={{
                  padding: "8px",
                  color: "white",
                  ":hover": { color: "gray" },
                }}
                href="#"
              >
                O Nás
              </MuiLink>
              <MuiLink
                sx={{
                  padding: "8px",
                  color: "white",
                  ":hover": { color: "gray" },
                }}
                href="#"
              >
                Podpora
              </MuiLink>
              <MuiLink
                sx={{
                  padding: "8px",
                  color: "white",
                  ":hover": { color: "gray" },
                }}
                href="#"
              >
                Kontakt
              </MuiLink>
              <MuiLink
                sx={{
                  padding: "8px",
                  color: "white",
                  ":hover": { color: "gray" },
                }}
                href="#"
              >
                Přihlášení / Registrace
              </MuiLink>
            </Box>
          ) : (
            ""
          )}
        </Hidden>
      </AppBar>
    </>
  );
};
export default Navbar;
