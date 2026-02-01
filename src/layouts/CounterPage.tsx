import { Stack, Typography } from "@mui/material";
import Counter from "../components/Counter";

const CounterPage = () => {
  return (
    <Stack
      spacing={2}
      direction={{ xs: "column", sm: "column" }}
      sx={{ pt: 2 }}
    >
      <Typography variant="h3">This is counter page</Typography>
      <Counter defaultValue={-67} />
      <Counter defaultValue={67} />
    </Stack>
  );
};

export default CounterPage;
