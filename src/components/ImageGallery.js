import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import TestButton from "./Button";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const ImageSlider = ({ images, sliderHeight = "400px", sliderWidth = "100%" }) => {
  return (
    <MKBox component="section" py={4}>
      {/* Wrap Carousel in MKBox for border and radius */}
      <MKBox
        sx={{
          border: "2px solid gray", // Add white border
          borderRadius: "20px", // Add border radius
          overflow: "hidden", // Ensure corners are rounded correctly
        }}
      >
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false} // Disable image status
          infiniteLoop
          autoPlay
          interval={3000}
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
          {images.map((image, index) => (
            <div key={index} style={{ position: "relative" }}>
              {/* Image */}
              <MKBox
                component="img"
                src={image.src}
                alt={`Slide ${index + 1}`}
                style={{
                  width: sliderWidth, // Use the sliderWidth prop for dynamic width
                  height: sliderHeight, // Use the sliderHeight prop for dynamic height
                  objectFit: "cover", // Maintain aspect ratio while filling the box
                }}
              />
              {/* Full Image Overlay for Title and Description */}
              <MKBox
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                sx={{
                  height: "100%", // Ensure full height for the overlay
                  background: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  color: "white",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Space out title and description
                }}
              >
                {/* Title at the Top */}
                <MKBox textAlign="center" mt={2}>
                  <MKTypography
                    variant="h2"
                    color="white"
                    mb={1}
                  >
                    {image.title}
                  </MKTypography>
                </MKBox>

                {/* Description at the Center */}
                <MKBox textAlign="center" mt="auto" mb="auto">
                  <MKTypography variant="body1" color="white" my={3}>
                    {image.description}
                  </MKTypography>
                </MKBox>


                <div className="flex justify-center items-center mb-6">
                  <TestButton icon={<NavigateNextIcon />} text="see more" />
                </div>
              </MKBox>
            </div>
          ))}
        </Carousel>
      </MKBox>
    </MKBox>
  );
};

// Setting default props for the ImageSlider
ImageSlider.defaultProps = {
  images: [],
  sliderHeight: "400px", // Default height
  sliderWidth: "100%", // Default width
};

// Typechecking props for the ImageSlider
ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  sliderHeight: PropTypes.string, // New prop type for height
  sliderWidth: PropTypes.string, // New prop type for width
};

export default ImageSlider;

