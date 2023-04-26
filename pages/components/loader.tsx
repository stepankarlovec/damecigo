import { Box, CircularProgress } from "@mui/material";
import { height } from "@mui/system";

export const Loader = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 400,
          top: "25%",
          left: "47%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
        <p>Získávám data..</p>
      </Box>
    </>
  );
};
