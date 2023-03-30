import { Box, Typography, Paper } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          left: 0,
          bottom: 0,
          display: "flex",
          width: "100%",
          padding: "0.5rem",
          justifyContent: "center",
        }}
      >
        <Box></Box>
        <Box>
          <Typography>
            Created with &hearts; by{" "}
            <a href="#" style={{ color: "red" }}>
              Stepan Karlovec
            </a>
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default Footer;
