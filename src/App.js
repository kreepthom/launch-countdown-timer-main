
import FlipClock from "./components/FlipClock";
import './components/FlipClockStyle.css'
import { SocialMedia } from "./components/SocialMedia";
function App() {
  return (
    <div className="app">
      <div className="imageBg"></div>
      <FlipClock />
      <SocialMedia/>
    </div>

  );
}

export default App;
