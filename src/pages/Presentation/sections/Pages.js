// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/pagesData";

function Pages() {
  const renderData = data.map(({ image, name, route }) => (
    <Grid item xs={12} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={name}>
      <Link to={route}>
        <ExampleCard image={image} name={name} display="grid" minHeight="auto" />
      </Link>
    </Grid>
  ));

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <div className="max-w-3xl mx-auto text-center mt-16">
            <div className="text-6xl font-bold text-gray-900 leading-tight mb-2 border-t-4 border-b-4 border-gray-500 py-4">
              <div className='mb-8 flex justify-center content-center text-black text-6xl font-bold'>
                <h1 className='text-black text-6xl font-bold'>
                  <div className="flex items-center justify-center ">
                    <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-black via-gray-300 to-black bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
                      Our Services Our Services Our Services
                    </span>
                    <h1
                      className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-black via-gray-500 to-gray-200 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
                      Our Pages to Explore
                    </h1>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 2, lg: 5 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={9} sx={{ mt: 3, px: { xs: 0, lg: 8 } }}>
            <Grid container spacing={3}>
              {renderData}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                Presentation Pages for Company, Landing Pages, Blogs and Support
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                These is just a small selection of the multiple possibitilies you have. Focus on the
                business, not on the design.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;
