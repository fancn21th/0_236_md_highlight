import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import commonMdastNodePlugin from "./commonMdastNodePlugin";
import markNodePlugin from "./markNodePlugin";
import md from "./example.md?raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const txt2Search = "I want you to know something about me";

function getRange(source: string, searchTxt: string) {
  const totalLength = source.length;
  const searchTxtLength = searchTxt.length;
  const start = source.indexOf(searchTxt);
  const end = start + searchTxtLength - 1;
  return { start, end, totalLength, searchTxtLength };
}

function MyMarkdown() {
  const [searchTxt] = useState(txt2Search);
  const [range, setRange] = useState<{
    start: number;
    end: number;
  } | null>(null);

  useEffect(() => {
    const newRange = getRange(md, searchTxt);
    setRange(newRange);
  }, [searchTxt]);

  return (
    <>
      <pre>{JSON.stringify(range, null, 2)}</pre>
      <pre>source: {md}</pre>
      <pre>search: {searchTxt}</pre>
      <hr />
      {range && range.start >= 0 && (
        <Markdown
          children={md}
          remarkPlugins={[
            remarkGfm,
            [markNodePlugin, { ...range }],
            [commonMdastNodePlugin, { searchTxt }],
          ]}
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
      )}
    </>
  );
}

export default MyMarkdown;
