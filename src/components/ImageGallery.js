import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const ImageSlider = ({ images }) => {
  return (
    <MKBox component="section" py={4}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={500}
        swipeable
        emulateTouch
        dynamicHeight
      >
        {images.map((image, index) => (
          <div key={index} style={{ position: "relative" }}>
            {/* Image */}
            <MKBox
              component="img"
              src={image.src}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%", // Make the image take the full width of the carousel
                height: "400px", // Set a fixed height for the images
                objectFit: "cover", // Maintain aspect ratio while filling the box
                borderRadius: "8px",
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
                background: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                color: "white",
                borderRadius: "8px", // Matches the image border radius
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
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                    },
                  })}
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
            </MKBox>
          </div>
        ))}
      </Carousel>
    </MKBox>
  );
};

// Setting default props for the ImageSlider
ImageSlider.defaultProps = {
  images: [],
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
};

export default ImageSlider;
