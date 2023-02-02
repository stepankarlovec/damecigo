import { Box } from "@mui/material";
import Head from "next/head";
import Navbar from "./components/navbar";
import ProductComponent from "./components/productComponent";

export const products = () => {
  const generateEmptyProducts = () => {
    let content = [];
    for (let i = 0; i < 22; i++) {
      content.push(
        <ProductComponent
          key={i}
          id={i}
          title="Velo X-FREEZE"
          description="Lahodný puk je doopravdy tak dobrý že se z něj ihned uděláte"
          image="/puk.png"
        ></ProductComponent>
      );
    }
    return content;
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar></Navbar>
      </nav>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: "url('/DC_bg.png') center repeat",
          backgroundSize: "110%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "80%",
              gap: "1rem",
            }}
          >
            {generateEmptyProducts()}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default products;
