import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          display: "flex",
        }}
      >
        <Box></Box>
        <Box>
          <Typography>
            Created with &hearts; by <a href="#">Stepan Karlovec</a>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
