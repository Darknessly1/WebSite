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
        centerMode
        centerSlidePercentage={75} // Make the current slide wider
      >
        {images.map((image, index) => (
          <div key={index}>
            <MKBox
              component="img"
              src={image.src}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%", // Full width of the carousel
                height: "400px", // Fixed height
                objectFit: "cover", // Maintain aspect ratio
                borderRadius: "8px",
              }}
            />
            <MKBox textAlign="center" mt={2}>
              <MKTypography variant="h6" fontWeight="bold">
                {image.title}
              </MKTypography>
              <MKTypography variant="body2" color="text">
                {image.description}
              </MKTypography>
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
