import "./styles.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Checkbox(props) {
  const { label } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(false);

  const handleOnChange = () => {
    if (isIndeterminate) {
      setIsIndeterminate(false);
      setIsChecked(true);
    } else {
      setIsChecked(!isChecked);
    }
  };

  const handleIndeterminate = () => {
    setIsIndeterminate(true);
    setIsChecked(false);
  };

  return (
    <div>
      <motion.label style={labelStyle}>{label}</motion.label>
      <motion.input
        type="checkbox"
        checked={isChecked}
        ref={(el) => {
          if (el) {
            el.indeterminate = isIndeterminate;
          }
        }}
        onChange={handleOnChange}
        onMouseEnter={() => handleIndeterminate()}
        onMouseLeave={() => setIsIndeterminate(false)}
        whileHover={{ scale: 1.2, backgroundColor: "#C5E1A5" }}
        whileTap={{ scale: 0.9 }}
      />
      <motion.div />
    </div>
  );
}

const onStyle = {
  backgroundColor: "#08920d"
};

const indeterminateStyle = {
  backgroundColor: "#f5f5f5"
};

const offStyle = {
  backgroundColor: "transparent"
};

const labelStyle = {
  fontSize: 12,
  fontFamily: "Helvetica Regular, Arial"
};
