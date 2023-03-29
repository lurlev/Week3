import "./styles.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Segment(props) {
  const { labelOne = "Day", labelTwo = "Week", labelThree = "Month" } = props;
  const [focused, setFocused] = useState(false);
  const handleMouseEnter = () => {
    setFocused(true);
  };

  const handleMouseLeave = () => {
    setFocused(false);
  };

  const checkFocused = focused;

  return (
    <div>
      <motion.div
        style={{
          width: "80px",
          height: "30px",
          borderStyle: "solid",
          backgroundColor: "#F1F8E9",
          borderColor: "#2E3626",
          borderWidth: "1px",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          display: "inline-block"
        }}
        animate={{}}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.1, backgroundColor: "#C5E1A5" }}
      >
        <label style={labelStyle}>
          <b>{labelOne}</b>
        </label>
      </motion.div>
      <motion.div
        style={{
          width: "80px",
          height: "30px",
          backgroundColor: "#F1F8E9",
          borderStyle: "solid",
          borderColor: "#2E3626",
          borderWidth: "1px",
          display: "inline-block"
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.1, backgroundColor: "#C5E1A5" }}
      >
        <label style={labelStyle}>
          <b>{labelTwo}</b>
        </label>
      </motion.div>
      <motion.div
        style={{
          width: "80px",
          height: "30px",
          backgroundColor: "#F1F8E9",
          borderStyle: "solid",
          borderColor: "#2E3626",
          borderWidth: "1px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
          display: "inline-block"
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.1, backgroundColor: "#C5E1A5" }}
      >
        <label style={labelStyle}>
          <b>{labelThree}</b>
        </label>
      </motion.div>
    </div>
  );
}

const labelStyle = {
  fontSize: "12px",
  fontFamily: "Helvetica Regular, Arial",
  letterSpacing: 0.1,
  color: "#2E3626",
  display: "inline-block",
  position: "relative",
  padding: "7px 0 0 0"
};
