import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Our Services
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Discover more of Our Work, detailed and more specified, making your life more easy and 
              flexiable, with the installations an more
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Web Services"
                position={{ color: "info", label: "Web" }}
                description="Making the creating of time more fast and rliable for us."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Licenses"
                position={{ color: "info", label: "Discover" }}
                description="Making Office, Adobe and more accessable and easy to buy. "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Camera installing"
                position={{ color: "info", label: "Web" }}
                description="Your house, company, any place is secure with our cameras installation."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Services"
                position={{ color: "info", label: "Services" }}
                description="Maeking services for all the companies easy and doable."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
