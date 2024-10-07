import { Box, Grid, Typography } from "@mui/material";

export const HeaderSection = () => {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        //backgroundImage: `url(${nightstars})`, // Imagen de fondo de la portada
        backgroundImage:
          "url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Grid item xs={12} textAlign="center">
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            fontFamily: '"Brush Script MT", cursive',
            fontSize: "64px",
            fontWeight: 700,
            textShadow: `
      4px 4px 10px rgba(0, 0, 0, 0.8), /* Sombra negra fuerte */
      -2px -2px 5px rgba(255, 255, 255, 0.7) /* Sombra blanca para resaltar */
    `,
          }}
        >
          Micaela
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          {/* Línea izquierda */}
          <Box
            sx={{
              height: "2px",
              width: "50px",
              backgroundColor: "white",
              marginRight: "10px",
            }}
          />
          {/* Texto de la fecha */}
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            22.04.2023
          </Typography>
          {/* Línea derecha */}
          <Box
            sx={{
              height: "2px",
              width: "50px",
              backgroundColor: "white",
              marginLeft: "10px",
            }}
          />
        </Box>

        <Typography variant="h3" sx={{ marginTop: "16px" }}>
          Mis 15 Años
        </Typography>
      </Grid>
    </Grid>
  );
};
