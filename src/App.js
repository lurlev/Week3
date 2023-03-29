import "./styles.css";
import Input from "./Input";
import Switch from "./Switch";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Segment from "./SegmentedButton";

export default function App() {
  return (
    <div className="App">
      <p>Input Field</p>
      <Input />
      <p>Toggle Switch</p>
      <Switch />
      <p>Checkbox</p>
      <Checkbox />
      <p>Radio Buttons</p>
      <Radio />
      <p>Segmented Button</p>
      <Segment />
    </div>
  );
}
