import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";
import { HtmlOverlay } from "./components/html-overlay";
import { InteractiveMap } from "./components/interactive-map";

function App() {
  return (
    <div className="App">
      <InteractiveMap />
      <HtmlOverlay />
    </div>
  );
}

export default App;
