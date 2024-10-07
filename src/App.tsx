import "./App.css";
import { Grid } from "@mui/material";
import { HeaderSection } from "./components/HeaderSection";
import { TimeSection } from "./components/TimeSection";
import { DescriptionSection } from "./components/DescriptionSection";
import { PlaceSection } from "./components/PlaceSection";
import { GiftSection } from "./components/GiftSection";
import { FooterSection } from "./components/FooterSection";

function App() {
  return (
    <Grid
      container
      xs={12}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <HeaderSection />
      <TimeSection />
      <DescriptionSection />
      <PlaceSection />
      <GiftSection />
      <FooterSection />
    </Grid>
  );
}

export default App;
