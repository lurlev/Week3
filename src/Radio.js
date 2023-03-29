import "./styles.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Radio(props) {
  const {
    groupName = "group",
    value = "value",
    defaultChecked = false
  } = props;

  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label>
        <div style={radioStyle}>
          <input
            type="radio"
            name={groupName}
            value={value}
            defaultChecked={defaultChecked}
          />
        </div>
      </label>
    </div>
  );
}

const radioStyle = {
  width: "14px",
  height: "14px",
  backgroundColor: "#08920d",
  borderRadius: "20px",
  display: "inline-block",
  position: "relative"
};

const radioOutline = {
  width: "16px",
  height: "16px",
  borderWidth: "1px",
  borderColor: "#08920d"
};
