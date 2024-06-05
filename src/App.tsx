import Markdown from "react-markdown";
import headingPlugin from "./headingPlugin";

// Did you know you can use tildes instead of backticks for code in markdown? ✨
const markdown = `
# hello
`;

function App() {
  return <Markdown children={markdown} remarkPlugins={[headingPlugin]} />;
}

export default App;
