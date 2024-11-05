/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/designBlocksData";

function DesignBlocks() {
  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, count, route, pro }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={pro ? "/" : route}>
                <ExampleCard image={image} name={name} count={count} pro={pro} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", mx: "auto"}}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-2 border-t-4 border-b-4 border-gray-500 py-2">
              <h1 className='mb-8 flex justify-center content-center text-black text-6xl font-bold'>
                <h1 className='text-black text-6xl font-bold'>
                  <div className="flex items-center justify-center">
                    <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-black via-gray-300 to-black bg-clip-text text-8xl box-content font-extrabold text-transparent text-center select-none">
                      Our Services Our Services Our Services
                    </span>
                    <h1
                      className="relative top-0 w-fit h-auto py-6 justify-center flex bg-gradient-to-r items-center from-black via-gray-600 to-gray-400 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
                      Project Out Team build
                    </h1>
                  </div>
                </h1>
              </h1>
            </h1>
          </div>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
