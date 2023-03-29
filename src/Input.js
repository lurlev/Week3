import "./styles.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { addPropertyControls, ControlType } from "framer";

const accentColor = "#5D3FD3";

export default function Input(props) {
  const {
    placeholder = "Placeholder Text",
    fieldType,
    label,
    hasLabel,
    disabled,
    defaultVal,
    required
  } = props;

  const [focused, setFocused] = useState(false);
  const [filledIn, setFilledIn] = useState(false);
  const checkFocusAndFill =
    (focused && filledIn) || (focused && !filledIn) || (!focused && filledIn);

  const handleMouseEnter = () => {
    setFocused(true);
  };

  const handleMouseLeave = () => {
    setFocused(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        height: "50px",
        width: "200px"
      }}
    >
      <motion.label
        style={labelStyle}
        initial={{ y: 0 }}
        animate={{
          y: checkFocusAndFill ? 3 : 18,
          scale: checkFocusAndFill ? 0.75 : 1,
          color: checkFocusAndFill ? accentColor : "#555",
          marginLeft: checkFocusAndFill ? "0px" : "15px"
        }}
      >
        Label
      </motion.label>
      <motion.input
        type={fieldType}
        style={inputStyle}
        placeholder={!focused ? "" : placeholder}
        onChange={(e) =>
          e.target.value !== "" ? setFilledIn(true) : setFilledIn(false)
        }
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <motion.div
        style={underlineStyle}
        initial={{ width: 0 }}
        animate={{ width: checkFocusAndFill ? "100%" : 0 }}
      />
    </div>
  );
}

const labelStyle = {
  display: "block",
  transformOrigin: "left top",
  position: "absolute",
  transition: "border 500ms",
  fontSize: 16,
  fontFamily: "Helvetica Regular, Arial",
  color: "#555",
  letterSpacing: 0.1
};

const inputStyle = {
  height: "40px",
  width: "200px",
  margin: "8px 0",
  display: "inline-block",
  background: "transparent",
  border: "none",
  boxSizing: "border-box",
  fontSize: 15,
  fontFamily: "Helvetica Regular, Arial"
};

const underlineStyle = {
  height: 2,
  width: "100%",
  background: "#8a2be2",
  marginTop: 2
};

addPropertyControls(Input, {
  fieldType: {
    title: "Field Type",
    type: ControlType.Enum,
    options: ["email", "password", "text"]
  },
  hasLabel: {
    title: "Has Label",
    type: ControlType.Boolean,
    defaultValue: true
  },
  label: {
    title: "Label",
    type: ControlType.String,
    defaultValue: "Email",
    hidden(props) {
      return props.hasLabel === false;
    }
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: false
  },
  defaultVal: {
    title: "Default Value",
    type: ControlType.String,
    defaultValue: ""
  },
  required: {
    title: "Required",
    type: ControlType.String,
    defaultValue: "(required)",
    hidden(props) {
      return props.required === false;
    }
  }
});
