// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultInfoCard({ color, icon, image, title, description, direction, small }) {
  return (
    <MKBox lineHeight={1} p={direction === "center" ? 2 : 0} textAlign={direction}>
      {image ? (
        <MKBox
          component="img"
          src={image}
          alt={title}
          width="250px"
          height="250px"
          mb={1}
          sx={{
            borderRadius: "16px", // Rounded corners
            boxShadow: 8,         // Adds shadow for depth
            cursor: "pointer",    // Pointer cursor on hover
            transition: "transform 0.3s ease, box-shadow 0.7s ease", // Smooth transitions
            "&:hover": {
              transform: "scale(1.06)", // Scale up slightly on hover
              boxShadow: 8,              // Intensified shadow on hover
            },
          }}
        />
      ) : typeof icon === "string" ? (
        <MKTypography
          display="block"
          variant={direction === "center" ? "h2" : "h3"}
          color={color}
          textGradient
        >
          <Icon>{icon}</Icon>
        </MKTypography>
      ) : (
        icon
      )}
      <MKTypography
        display="block"
        variant="h5"
        fontWeight="bold"
        mt={direction === "center" ? 1 : 2}
        mb={1.5}
      >
        {title}
      </MKTypography>
      <MKTypography
        display="block"
        variant={small ? "button" : "body2"}
        color="text"
        pr={direction === "left" ? 6 : 0}
        pl={direction === "right" ? 6 : 0}
        fontWeight="bold"
      >
        {description}
      </MKTypography>
    </MKBox>
  );
}

// Setting default props for the DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  direction: "left",
  small: false,
  image: null,
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  icon: PropTypes.node,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right", "center"]),
  small: PropTypes.bool,
};

export default DefaultInfoCard;
