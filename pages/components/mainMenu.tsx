import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import EnterAddress from "./enterAddress";

export default function MainMenu() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <EnterAddress></EnterAddress>
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", , "row", "row"],
            padding: "1rem",
            alignItems: ["center", "", ""],
          }}
        >
          <Box
            sx={{
              margin: "0.8rem",
              justifyItems: "center",
              textAlign: "center",
              border: "1px solid red",
              width: "350px",
              borderRadius: "3%",
              backgroundColor: "#ce0022",
              color: "white",
              boxShadow: "4px 4px 10px grey",
              transition: "transform .3s",
              ":hover": {
                transform: "scale(1.015)",
              },
            }}
          >
            <Image
              style={{ padding: "1rem", borderRadius: "8%" }}
              src="/ciga.jpg"
              width="300"
              height="350"
              alt="Krabička od cigaret"
            ></Image>
            <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
              Váš jediný pomocník při nikotinovém absťáku
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  marginX: "1rem",
                  display: "flex",
                  justifyItems: "center",
                  justifyContent: "space-around",
                  border: "1px solid red",
                  width: "630px",
                  height: "100%",
                  borderRadius: "3%",
                  backgroundColor: "#ce0022",
                  color: "white",
                  boxShadow: "4px 4px 10px grey",
                  transition: "transform .3s",
                  ":hover": {
                    transform: "scale(1.015)",
                  },
                }}
              >
                <Image
                  style={{
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                    marginLeft: "1rem",
                    borderRadius: "8%",
                  }}
                  src="/puk.png"
                  width="250"
                  height="200"
                  alt="Krabička od cigaret"
                ></Image>
                <Box sx={{ marginX: "1rem", marginTop: "1.5rem" }}>
                  <Typography variant="h5">
                    Lahodné sáčky Velo X-Freeze u nás stále dostupné
                  </Typography>
                  <Link href="/products">
                    <Button variant="outlined">Nakupuj ihned</Button>
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
              }}
            >
              {/* DOWN */}
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box
                  sx={{
                    marginX: "1rem",

                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "center",
                    justifyContent: "center",
                    textAlign: "left",
                    border: "1px solid red",
                    width: "300px",
                    height: "205px",
                    borderRadius: "3%",
                    backgroundColor: "#ce0022",
                    color: "white",
                    boxShadow: "4px 4px 10px grey",
                    transition: "transform .3s",
                    ":hover": {
                      transform: "scale(1.015)",
                    },
                  }}
                >
                  <Box sx={{ marginX: "1rem", marginBottom: "1rem" }}>
                    <Typography variant="h5">Online podpora</Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box
                  sx={{
                    marginX: "1rem",

                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "center",
                    justifyContent: "center",
                    textAlign: "left",
                    border: "1px solid red",
                    width: "300px",
                    height: "205px",
                    borderRadius: "3%",
                    backgroundColor: "#ce0022",
                    color: "white",
                    boxShadow: "4px 4px 10px grey",
                    transition: "transform .3s",
                    ":hover": {
                      transform: "scale(1.015)",
                    },
                  }}
                >
                  <Box sx={{ marginX: "1rem", marginBottom: "1rem" }}>
                    <Typography variant="h5">
                      Rozvoz 24 hodin denně, 8 dní v týdnu.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
