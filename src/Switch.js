import "./styles.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { addPropertyControls, ControlType } from "framer";

export default function toggleSwitch(props) {
  const { hasLabel, label, disabled, toggleOn } = props;
  const [is0n, setIs0n] = useState(false);
  const toggleSwitch = () => setIs0n(!is0n);
  const checkSwitched = is0n;

  return (
    <motion.div
      style={toggleStyle}
      data-is0n={is0n}
      onClick={toggleSwitch}
      initial={{ backgroundColor: "#d8d8d8", borderColor: "#808080" }}
      animate={{
        backgroundColor: checkSwitched ? "#008000" : "#d8d8d8",
        borderColor: checkSwitched ? "transparent" : "#808080"
      }}
    >
      <motion.div
        style={handleStyle}
        initial={{ x: 0, color: "#808080", backgroundColor: "#808080" }}
        animate={{
          x: checkSwitched ? "15px" : 0,
          backgroundColor: checkSwitched ? "#ffffff" : "#808080"
        }}
      />
      <label style={labelStyle}>{label}</label>
    </motion.div>
  );
}

const toggleStyle = {
  width: "35px",
  height: "20px",
  backgroundColor: "#d8d8d8",
  borderStyle: "solid",
  borderColor: "#808080",
  borderWidth: "1.5px",
  borderRadius: "20px"
};

const handleStyle = {
  width: "14px",
  height: "14px",
  backgroundColor: "#808080",
  borderRadius: "20px",
  marginTop: "2.5px",
  marginLeft: "3px",
  transition: "0.3s",
  position: "relative"
};

const labelStyle = {
  marginTop: "5px",
  fontSize: 12,
  fontFamily: "Helvetica Regular, Arial"
};
