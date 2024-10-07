import { Box, Grid, Typography } from "@mui/material";
import divider from "../assets/img/15.jpg";

export const DescriptionSection = () => {
  return (
    <Box
      sx={{
        height: "45rem",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#778da9", // Fondo inspirado en "La Noche Estrellada"
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
        sx={{
          borderRadius: "10px",
        }}
      >
        {/* Primer texto */}
        <Grid item xs={9} mb="20px">
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Dancing Script', cursive",
            }}
          >
            Te espero para compartir esa noche que para mí será mágica.
          </Typography>
        </Grid>

        {/* Imagen decorativa */}
        <Grid item xs={8}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "10rem",
              height: "20rem",
            }}
          >
            <img
              src={divider}
              alt="Decorative icon"
              style={{ width: "100%", height: "auto" }}
            />{" "}
            {/* Ícono decorativo */}
          </Box>
        </Grid>

        {/* Segundo texto */}
        <Grid item xs={9} mt="20px">
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Dancing Script', cursive",
            }}
          >
            Viernes 8 de noviembre - 22 hs
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
