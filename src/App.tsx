import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import commonMdastNodePlugin from "./commonMdastNodePlugin";
import "./App.css";
import md from "./example.md?raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function App() {
  return (
    <Markdown
      children={md}
      remarkPlugins={[remarkGfm, commonMdastNodePlugin]}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={dark}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    />
  );
}

export default App;
