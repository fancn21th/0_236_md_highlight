import Markdown from "react-markdown";
import headingPlugin from "./headingPlugin";
import "./App.css";
import md from "./example.md?raw";

function App() {
  return <Markdown children={md} remarkPlugins={[headingPlugin]} />;
}

export default App;
