import { Box, Grid, Typography } from "@mui/material";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import { styled } from "@mui/system";

export const GiftSection = () => {
  const CustomBox = styled(Box)({
    borderRadius: "25px", // Bordes redondeados
    border: "2px solid #a8a692", // Borde gris
    padding: "10px 20px", // Espaciado interno
    display: "inline-block", // Ajusta el tamaño al contenido
    backgroundColor: "white", // Fondo blanco
    textAlign: "center", // Texto centrado
  });

  return (
    <Box
      sx={{
        height: "25rem",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#778da9", // Color de fondo
        color: "white",
      }}
    >
      <Grid
        xs={10}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        {/* Icono de regalo */}
        <Grid item xs={10}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={2}
          >
            <CardGiftcardOutlinedIcon
              fontSize="large"
              sx={{ width: "15vw", height: "15vw" }}
            />
          </Box>
        </Grid>

        {/* Texto principal */}
        <Grid item xs={10}>
          <Typography variant="h5" fontWeight="bold">
            Si deseas regalarme algo más que tu hermosa presencia...
          </Typography>
        </Grid>

        {/* Información de regalo */}
        <Grid item xs={12} mt="1rem">
          <CustomBox>
            <Typography variant="h6" component="div" color="textPrimary">
              Micaela.Ochoa.Babi
            </Typography>
          </CustomBox>
        </Grid>
      </Grid>
    </Box>
  );
};
