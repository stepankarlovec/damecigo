import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function EnterAddress() {
  const [addressValue, setAddressValue] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
        marginTop: "1rem",
      }}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Zadejte vaši adresu"
        value={addressValue}
        onChange={({ target: { value } }) => {
          setAddressValue(value);
        }}
        sx={{ width: ["55%", "70%", "70%"] }}
      />
      <Button variant="contained">Doručit</Button>
    </Box>
  );
}
