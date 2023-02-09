import { Box, Button, TextField } from "@mui/material";
import { FC, useState } from "react";

const Counter: FC = () => {
  const [value, setValue] = useState<number>(1);
  const [inputColor, setInputColor] = useState<string>("");

  const plus = () => {
    setInputColor("white");
    setValue((prev) => prev + 1);
  };
  const minus = () => {
    if (value > 1) {
      setInputColor("white");
      setValue((prev) => prev - 1);
    }
  };
  const isInputNumber = (val: string) => {
    const reg = new RegExp("^[0-9]+$");
    if (reg.test(val)) {
      return true;
    } else {
      return false;
    }
  };
  const validateInput = (e: { target: { value: string } }) => {
    const reg = new RegExp("^[0-9]+$");
    if (reg.test(e.target.value)) {
      const newNum = parseInt(e.target.value);
      setInputColor("white");
      if (newNum > 0) {
        setValue(newNum);
      } else {
        setValue(1);
      }
    } else {
      setInputColor("#ce0022");
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", marginY: "1rem" }}>
        <TextField
          key={value}
          sx={{ width: "80px", backgroundColor: inputColor }}
          onChange={validateInput}
          defaultValue={value}
        ></TextField>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            sx={{
              height: 28,
              borderRadius: 0,
              borderBottom: "1px solid white",
            }}
            variant="contained"
            onClick={plus}
          >
            +
          </Button>
          <Button
            sx={{ height: 28, borderRadius: 0 }}
            variant="contained"
            onClick={minus}
          >
            -
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Counter;
