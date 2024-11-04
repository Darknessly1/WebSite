import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

import routes from "routes";
import footerRoutes from "footer.routes";

import bgImage from "assets/bgimg2.jpg";
import ImageSlider from "components/ImageGallery";
import image1 from "assets/images/examples/blog2.jpg";
import image2 from "assets/images/examples/blog-9-4.jpg";
import image3 from "assets/images/examples/testimonial-6-2.jpg";
import image4 from "assets/images/examples/testimonial-6-3.jpg";
import image5 from "assets/images/bg-about-us.jpg";
import image6 from "assets/images/bg-presentation.jpg";
import image7 from "assets/images/bg2.jpg";
import image8 from "assets/images/bg3.jpg";
import image9 from "assets/images/team-2.jpg";
import Blogsfile from "components/Blogsfile";


import ArticleIcon from '@mui/icons-material/Article';
import TerminalIcon from '@mui/icons-material/Terminal';
import ComputerIcon from '@mui/icons-material/Computer';
import MouseIcon from '@mui/icons-material/Mouse';
import LanIcon from '@mui/icons-material/Lan';
import { Link } from 'react-router-dom';
import MKSocialButton from "components/MKSocialButton";
import MKTypography from "components/MKTypography";
// import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import Flipedimages from "components/Flipedimages";

function Presentation() {


  const images = [
    {
      src: image1,
      title: "Image Title 1",
      description: "Description for image 1.",
    },
    {
      src: image2,
      title: "Image Title 2",
      description: "Description for image 2.",
    },
    {
      src: image3,
      title: "Image Title 3",
      description: "Description for image 3.",
    },

    {
      src: image4,
      title: "Image Title 4",
      description: "Description for image 4.",
    },

    {
      src: image5,
      title: "Image Title 5",
      description: "Description for image 5.",
    },

    {
      src: image6,
      title: "Image Title 6",
      description: "Description for image 6.",
    },
    {
      src: image7,
      title: "Image Title 7",
      description: "Description for image 7.",
    },
    {
      src: image8,
      title: "Image Title 8",
      description: "Description for image 8.",
    },
    {
      src: image9,
      title: "Image Title 9",
      description: "Description for image 9.",
    },
  ];

  const blogData = [
    {
      src: image4,
      title: "First Blog",
      description: "A brief look into the lifecycle methods in React and how they can be utilized...",
      link: "/blogs/react-lifecycle",
    },
    {
      src: image5,
      title: "Second Blog",
      description: "Discover how Tailwind CSS can streamline your styling process and boost productivity...",
      link: "/blogs/tailwind-introduction",
    },
    // Add more blog entries as needed
  ];


  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "Reach Out",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="140vh"
        width="100%"
        sx={{
          hight: "100%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={15} lg={16} justifyContent="center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
              {/* Left Content */}
              <div className="text-white  md:w-2/3 text-center md:text-left">
                <h1 className="flex justify-center items-center text-6xl mb-10 mt-0">
                  <ArticleIcon />
                  <span className="font-fantasy ">
                    Discover More Blogs
                  </span>
                </h1>
                <Blogsfile blogs={blogData} />
                <div className="flex justify-center items-center text-7xl mb-10 mt-0 space-x-8">
                  <div className="flex flex-col items-center">
                    <Link to="/terminal-page">
                      <TerminalIcon
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          backgroundColor: '#3a3a3a',
                          padding: '12px',
                          borderRadius: '50%',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                          '&:hover': {
                            color: '#1e88e5',
                            transform: 'scale(1.1)',
                            transition: 'transform 0.3s ease',
                          },
                        }}
                      />
                    </Link>
                    <span className="text-sm mt-2 text-white">Terminal</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <Link to="/computer-page">
                      <ComputerIcon
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          backgroundColor: '#3a3a3a',
                          padding: '12px',
                          borderRadius: '50%',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                          '&:hover': {
                            color: '#43a047',
                            transform: 'scale(1.1)',
                            transition: 'transform 0.3s ease',
                          },
                        }}
                      />
                    </Link>
                    <span className="text-sm mt-2 text-white">Computer</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <Link to="/mouse-page">
                      <MouseIcon
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          backgroundColor: '#3a3a3a',
                          padding: '12px',
                          borderRadius: '50%',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                          '&:hover': {
                            color: '#f4511e',
                            transform: 'scale(1.1)',
                            transition: 'transform 0.3s ease',
                          },
                        }}
                      />
                    </Link>
                    <span className="text-sm mt-2 text-white">Mouse</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Link to="/mouse-page">
                      <LanIcon
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          backgroundColor: '#3a3a3a',
                          padding: '12px',
                          borderRadius: '50%',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                          '&:hover': {
                            color: '#f98a8a',
                            transform: 'scale(1.1)',
                            transition: 'transform 0.3s ease',
                          },
                        }}
                      />
                    </Link>
                    <span className="text-sm mt-2 text-white">Lan</span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full md:w-1/3 flex flex-col">
                <div className="flex-1 h-30">
                  <ImageSlider images={images} sliderHeight="300px" sliderWidth="100%" />
                </div>
                <div className="flex-1 h-40">
                  <ImageSlider images={images} sliderHeight="300px" sliderWidth="100%" />
                </div>
              </div>

            </div>

          </Grid>
        </Container>
      </MKBox>

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.3),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container sx={{ mt: 10 }}>
          <BuiltByDevelopers />
        </Container>

        <div className="flex m-5">
          
        </div>

        <div className="ml-20">
          <Flipedimages />
        </div>

        <Pages />

        <Information />

        <Download />

        <DesignBlocks />

        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="dark"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="dark"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="dark"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>


        <Testimonials />


        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
