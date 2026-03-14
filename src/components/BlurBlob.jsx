import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({
  position = { top: "50%", left: "50%" },
  size = { width: "220px", height: "220px" },
  color = "bg-blue-500",
  opacity = "opacity-20",
  blur = "blur-3xl",
  zIndex = "z-0",
}) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className={`absolute pointer-events-none ${zIndex}`}
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={`w-full h-full rounded-full ${color} ${opacity} ${blur} animate-blob`}
      ></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  color: PropTypes.string,
  opacity: PropTypes.string,
  blur: PropTypes.string,
  zIndex: PropTypes.string,
};

export default BlurBlob;