
import FlipClock from "./components/FlipClock";
import './components/FlipClockStyle.css'
import { SocialMedia } from "./components/SocialMedia";
function App() {
  return (
    <div className="app" style={{ backgroundImage: "url('images/bg-stars.svg')" }}>
      <div className="imageBg" style={{ backgroundImage: "url('images/pattern-hills.svg')" }}/>
      <FlipClock />
      <SocialMedia />
    </div>

  );
}

export default App;
