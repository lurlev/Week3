import "./styles.css";
import { useState } from "react";
import Radio from "./Radio";

export default function RadioGroup(props) {
  const {
    values = ["Left", "Right"],
    groupName = "group",
    defaultCheckedIndex = 0
  } = props;
  return (
    <div class="container">
      {values.map((value, i) => {
        return (
          <Radio
            groupName={groupName}
            value={value}
            defaultChecked={defaultCheckedIndex === i}
            class="custom-radio"
          />
        );
      })}
    </div>
  );
}
