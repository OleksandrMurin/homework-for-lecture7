import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Counter({ defaultValue = 0 }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <Paper elevation={2} sx={{ p: 2, borderRadius: 2, maxWidth: 420 }}>
      <Stack spacing={1}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            Counter
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {value}
          </Typography>
        </Box>
        <Divider />
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            onClick={() => setValue((prev) => prev + 1)}
            fullWidth
          >
            +
          </Button>
          <Button
            variant="contained"
            onClick={() => setValue((prev) => prev - 1)}
            fullWidth
          >
            -
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
