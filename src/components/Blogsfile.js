import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import TestButton from "./Button";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Blogsfile = ({ blogs }) => {
  return (
    <MKBox component="section" py={4}>
      <MKBox
        sx={{
          border: "2px solid gray", // Add white border
          borderRadius: "20px", // Add border radius
          overflow: "hidden", // Ensure corners are rounded correctly
          position: "relative",
        }}
      >
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={500}
          swipeable
          emulateTouch
          dynamicHeight
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <div
                onClick={onClickHandler}
                className="absolute top-1/2 left-4 z-10 cursor-pointer text-white"
                style={{
                  transform: "translateY(-50%)",
                }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 40 }} />
              </div>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <div
                onClick={onClickHandler}
                className="absolute top-1/2 right-4 z-10 cursor-pointer text-white"
                style={{
                  transform: "translateY(-50%)",
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
              </div>
            )
          }
          renderIndicator={false}
        >
          {blogs.map((blog, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                backgroundImage: `url(${blog.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <MKBox
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                sx={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: 0,
                  left: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <MKTypography variant="h2" fontWeight="bold" gutterBottom color="white">
                  {blog.title}
                </MKTypography>
                <MKTypography variant="body1" color="white" mb={2}>
                  {blog.description}
                </MKTypography>
                <TestButton icon={<AutoStoriesIcon />} text="Discover More" />
              </MKBox>
            </div>
          ))}
        </Carousel>
      </MKBox>
    </MKBox>
  );
};

// Setting default props for the Blogsfile component
Blogsfile.defaultProps = {
  blogs: [],
};

// Typechecking props for the Blogsfile component
Blogsfile.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Blogsfile;
