import { Box, Grid, Typography } from "@mui/material";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

export const FooterSection = () => {
  return (
    <Box
      sx={{
        height: "20rem",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#778da9", // Fondo inspirado en "La Noche Estrellada"
        color: "white",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{ mb: "2rem" }}
      >
        {/* Ícono en el centro */}
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={2}
          >
            <AutoAwesomeOutlinedIcon
              fontSize="large"
              sx={{ width: "12vw", height: "12vw" }} // Ajusta el tamaño para que sea más visible
            />
          </Box>
        </Grid>

        {/* Texto en el centro */}
        <Grid item xs={12}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ fontFamily: "'Dancing Script', cursive" }}
          >
            ¡Una gran noche junto a vos!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
