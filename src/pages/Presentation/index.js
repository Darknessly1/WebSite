import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";

import routes from "routes";
import footerRoutes from "footer.routes";

// import bgImage from "assets/bgimg2.jpg";
import Flipedimages from "components/Flipedimages";
import Hidden from "components/Hidden";
import Miltiimg from "components/Miltiimg";

import imgtest1 from "assets/imgtest1.jpg";

function Presentation() {


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
        minHeight="120vh"
        width="100%"
        style={{
          backgroundImage: `url(${imgtest1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}
      >
        <Container>
          <Grid container item xs={20} lg={14} justifyContent="center">
            <div
              className="bg-cover bg-center bg-opacity-30"
            >
              <section className="bg-opacity-30 py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                      <h1 className="mt-4 text-4xl font-bold text-white lg:mt-8 sm:text-6xl xl:text-8xl">
                        Connect & learn from the experts
                      </h1>
                      <p className="mt-4 text-base text-white lg:mt-8 sm:text-xl">
                        Grow your career fast with the right mentor.
                      </p>

                      <a
                        href="#"
                        className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white bg-black rounded-full transition-all duration-200 hover:bg-white hover:text-black focus:bg-yellow-400 lg:mt-16"
                      >
                        Discover more
                        <svg
                          className="w-6 h-6 ml-8 -mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </a>

                      <p className="mt-5 text-white">
                        Already joined us?{' '}
                        <a
                          href="#"
                          className="text-white font-bold transition-all duration-200 hover:underline"
                        >
                          Log in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
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
        <div className="flex m-5">

        </div>

        <div className="ml-20">
          <h1 className='mb-8 flex justify-center content-center text-black text-6xl font-bold'>
            <h1 className='text-black text-6xl font-bold mb-12'>
              <div className="flex items-center justify-center ">
                <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-gray-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
                  Our Services
                </span>
                <h1
                  className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-green-500 via-green-700 to-green-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
                  Our Services
                </h1>
              </div>
            </h1>
          </h1>
          <Flipedimages />
        </div>

        <div className="mt-20">
          <Hidden />
        </div>

        <Pages />

        <Miltiimg />

        <DesignBlocks />

      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
