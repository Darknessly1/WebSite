import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import { Button } from "@mui/material"; // Button for the "Read More" link/
import TestButton from "./Button";
// import ExploreIcon from "@mui/icons-material/Explore";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Blogsfile = ({ blogs }) => {
    return (
        <MKBox component="section" py={4}>
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={5000}
                transitionTime={500}
                swipeable
                emulateTouch
                dynamicHeight
            >
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        style={{
                            position: "relative",
                            backgroundImage: `url(${blog.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "400px", // Set a fixed height for the slides
                            borderRadius: "8px",
                            overflow: "hidden",
                        }}
                    >
                        {/* Overlay */}
                        <MKBox
                            position="absolute"
                            top={0}
                            left={0}
                            right={0}
                            bottom={0}
                            sx={{
                                position: "absolute",
                                hight: "auto",
                                width: "auto",
                                top: 0,
                                left: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 0.5 opacity
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                padding: "20px",
                                textAlign: "center",
                                
                            }}
                        >
                            {/* Blog Title */}
                            <MKTypography variant="h2" fontWeight="bold" gutterBottom color="white">
                                {blog.title}
                            </MKTypography>

                            {/* Blog Excerpt */}
                            <MKTypography variant="body1" color="white" mb={2} >
                                {blog.description}
                            </MKTypography>

                            {/* Read More Button */}
                            <TestButton icon={<AutoStoriesIcon />} text="Discover More" />
                        </MKBox>
                    </div>
                ))}
            </Carousel>
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
            src: PropTypes.string.isRequired,         // Image URL
            title: PropTypes.string.isRequired,       // Blog Title
            description: PropTypes.string.isRequired, // Short excerpt
            link: PropTypes.string.isRequired,        // Link to the full blog
        })
    ).isRequired,
};

export default Blogsfile;
