import { visit } from "unist-util-visit";

const highlightedNVisitedNodes: string[] = [];

export default function plugin() {
  return function (tree) {
    visit(tree, ["heading", "listItem"], function (node) {
      // hacker & trick
      // for each node, it will be visited twice and somehow the data is missing in the second visit
      const key = `${node.position.start.line}:${node.position.start.column}:${node.position.end.line}:${node.position.end.column}`;

      if (node.data && node.data.highlight) {
        node.data = {
          ...node.data,
          hProperties: { className: "i-am-highlighted" },
        };
        highlightedNVisitedNodes.push(
          `${node.position.start.line}:${node.position.start.column}:${node.position.end.line}:${node.position.end.column}`
        );
      }

      if (highlightedNVisitedNodes.includes(key)) {
        node.data = {
          ...node.data,
          hProperties: { className: "i-am-highlighted" },
        };
      }
    });
  };
}
