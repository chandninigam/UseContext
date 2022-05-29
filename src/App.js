import "./styles.css";
import DisplayNumber from "./DisplayNumber";
import InputComponent from "./Input";
import IncreaseNumber from "./IncreaseNumber";
import DecreaseNumber from "./DecreaseNumber";
import RedBackground from "./RedBackground";

export default function App() {
  return (
    <div className="container">
      <RedBackground>
        <DisplayNumber />
      </RedBackground>
      <InputComponent />
      <IncreaseNumber />
      <DecreaseNumber />
    </div>
  );
}
