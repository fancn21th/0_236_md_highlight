import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import commonMdastNodePlugin from "./commonMdastNodePlugin";
import markNodePlugin from "./markNodePlugin";
import md from "./example.md?raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function getRange(source: string, searchTxt: string) {
  const start = source.indexOf(searchTxt);
  const end = start + searchTxt.length;
  return { start, end };
}

function MyMarkdown() {
  const [searchTxt, setSearchTxt] = useState("understand");
  const [range, setRange] = useState<{
    start: number;
    end: number;
  } | null>(null);

  useEffect(() => {
    const newRange = getRange(md, searchTxt);
    console.log({ newRange });
    setRange(newRange);
  }, [searchTxt]);

  return (
    range && (
      <Markdown
        children={md}
        remarkPlugins={[
          remarkGfm,
          [markNodePlugin, { ...range }],
          commonMdastNodePlugin,
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
    )
  );
}

export default MyMarkdown;
