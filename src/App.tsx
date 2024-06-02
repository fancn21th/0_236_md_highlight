import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `Just a link: www.nasa.gov.`;

function App() {
  return <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>;
}

export default App;
