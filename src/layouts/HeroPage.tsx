import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate, useParams } from "react-router-dom";
import { useHeroes } from "../hooks/useHeroes";

const HeroPage = () => {
  const theme = useTheme();
  let navigate = useNavigate();
  const { id } = useParams();
  const { data, loading, error } = useHeroes();
  const rows =
    data?.map((hero) => ({
      id: hero.id,
      name: hero.name,
      status: hero.status,
    })) || [];
  function formatIsoDateTime(isoString: string) {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("uk-UA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  }
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 5,
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 2,
      align: "center",
      headerAlign: "center",
    },
  ];
  if (!data) {
    return <div>Loading...</div>;
  } else {
    const isFemale = data[Number(id) - 1]?.gender === "Female";
    const genderColors = isFemale
      ? theme.tokens.chip.gender.female
      : theme.tokens.chip.gender.male;

    const isAlive = data[Number(id) - 1]?.status === "Alive";
    const statusColors = isAlive
      ? theme.tokens.chip.status.alive
      : theme.tokens.chip.status.dead;
    return (
      <Box>
        <DataGrid
          rows={rows}
          columns={columns}
          onRowClick={(params) => navigate(`/hero/${params.id}`)}
          autoHeight
          disableRowSelectionOnClick
          pageSizeOptions={[10, 20, 50]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
        />
        {id && (
          <Drawer
            open={Boolean(id)}
            variant="temporary"
            anchor="right"
            onClose={() => navigate("/hero")}
          >
            <Paper>
              <Typography variant="h5" sx={{ textAlign: "center", pt: 10 }}>
                {data[Number(id) - 1].name}
              </Typography>
            </Paper>
            <Card sx={{}}>
              <CardMedia
                component="img"
                sx={{ width: 300, p: 1 }}
                image={data[Number(id) - 1].image}
                alt="Live from space album cover"
              />
            </Card>
            <CardContent>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip
                  variant="outlined"
                  label={data[Number(id) - 1].gender}
                  sx={{
                    bgcolor: genderColors.bg,
                    color: genderColors.fg,
                    border: genderColors.border,
                  }}
                />
                <Chip
                  label={data[Number(id) - 1].status}
                  sx={{
                    bgcolor: statusColors.bg,
                    color: statusColors.fg,
                    border: statusColors.border,
                  }}
                />
                {data[Number(id) - 1].type && (
                  <Chip
                    label={`Type: ${data[Number(id) - 1].type}`}
                    sx={{
                      bgcolor: theme.tokens.chip.tag.bg,
                      color: theme.tokens.chip.tag.fg,
                      border: theme.tokens.chip.tag.border,
                    }}
                  />
                )}
              </Stack>
              <List sx={{ pt: 2 }}>
                <Divider component="li" />
                <ListItem>
                  <ListItemText
                    primary="Origin"
                    secondary={data[Number(id) - 1].origin.name}
                  />
                </ListItem>
                <Divider component="li" />

                <ListItem>
                  <ListItemText
                    primary="Location"
                    secondary={data[Number(id) - 1].location.name}
                  />
                </ListItem>
                <Divider component="li" />

                <ListItem>
                  <ListItemText
                    primary="Created"
                    secondary={formatIsoDateTime(data[Number(id) - 1].created)}
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </CardContent>
          </Drawer>
        )}
      </Box>
    );
  }
};

export default HeroPage;
