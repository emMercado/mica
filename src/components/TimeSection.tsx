import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

export const TimeSection = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const eventDate = new Date("2024-11-08T00:00:00");
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <Box
      sx={{
        height: "80vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(180deg, #1b263b 0%, #415a77 50%, #778da9 100%)", // Gradiente inspirado en los tonos de "La Noche Estrellada"
        color: "white",
        overflow: "hidden",
        mt: "-10px",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.7)",
        }}
      >
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {/* Título "Faltan" */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Dancing Script', cursive",
              marginBottom: "20px",
            }}
          >
            Faltan
          </Typography>

          {/* Contador */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: "3rem",
              textAlign: "center",
            }}
          >
            {`${timeLeft.days} : ${timeLeft.hours} : ${timeLeft.minutes} : ${timeLeft.seconds}`}
          </Typography>

          {/* Etiquetas */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              marginTop: "10px",
              ml: '2.3rem'
            }}
          >
            <Typography variant="body1">Días</Typography>
            <Typography variant="body1">Horas</Typography>
            <Typography variant="body1">Minutos</Typography>
            <Typography variant="body1">Segundos</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
