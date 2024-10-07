import { Box, Button, Grid, styled, Typography } from "@mui/material";
import fondonochestrellada from "../assets/img/fondo.webp";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MobileFriendlyRoundedIcon from "@mui/icons-material/MobileFriendlyRounded";

const CustomButton = styled(Button)({
  borderRadius: "25px", // Ajusta los bordes redondeados
  border: "2px solid #b0b0a8", // Borde gris
  padding: "8px 16px", // Espaciado interior del botón
  textTransform: "none", // Evita que el texto se convierta en mayúsculas
  fontSize: "16px", // Tamaño de la fuente similar al de la imagen
  color: "#333", // Color del texto
  backgroundColor: "white", // Fondo blanco
  "&:hover": {
    backgroundColor: "#f0f0f0", // Color de fondo al hacer hover
  },
});

export const PlaceSection = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        backgroundImage: `url(${fondonochestrellada})`, // Imagen de fondo de la portada
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      {/* Sección del lugar */}
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Negro con 50% de transparencia
          zIndex: 2,
          width: "80%", // Ocupa el 80% del ancho de la ventana
          padding: "20px", // Espaciado
          textAlign: "center", // Alinea el texto al centro
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.7)", // Sombra más pronunciada
          mb: "3rem", // Margen inferior
        }}
      >
        <Grid container direction="column" alignItems="center">
          <PlaceOutlinedIcon
            fontSize="large"
            sx={{ width: "10vw", height: "10vw" }} // Ajusté el tamaño para mejor visualización
          />
          <Typography variant="h4" gutterBottom>
            Las Piedras
          </Typography>
          <Typography>Chiclana 2220, La Rioja, Argentina</Typography>
          <Box mt="20px">
            <CustomButton
              href="https://www.google.com/maps/dir/-29.4060032,-66.8663808/-29.4272084,-66.8772858/@-29.4258884,-66.8796659,16.05z/data=!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
              // @ts-ignore
              target="_blank"
              rel="noopener noreferrer" // Seguridad adicional para los enlaces externos
            >
              ¿Cómo llegar?
            </CustomButton>
          </Box>
        </Grid>
      </Box>

      {/* Sección para confirmar asistencia */}
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Negro con 50% de transparencia
          zIndex: 2,
          width: "80%", // Ocupa el 80% del ancho de la ventana
          padding: "20px", // Espaciado
          textAlign: "center", // Alinea el texto al centro
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.7)", // Sombra más pronunciada
        }}
      >
        <Grid container direction="column" alignItems="center">
          <MobileFriendlyRoundedIcon
            fontSize="large"
            sx={{ width: "10vw", height: "10vw" }}
          />
          <Typography variant="h5">Por favor confirmar asistencia</Typography>
          <Typography variant="h6">antes del 15 de Octubre</Typography>
        </Grid>
      </Box>
    </Grid>
  );
};
