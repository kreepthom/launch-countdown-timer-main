
import FlipClock from "./components/FlipClock";
import './components/FlipClockStyle.css'
import { SocialMedia } from "./components/SocialMedia";
function App() {
  return (
    <div className="app">
      <div className="imageBg"></div>
      <FlipClock />
      <SocialMedia/>
       {/* <img src='assets/pattern-hills.svg' alt="starts" className="imageBg" /> */}
    </div>

  );
}

export default App;
