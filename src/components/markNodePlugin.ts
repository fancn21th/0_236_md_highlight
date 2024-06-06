import { visit } from "unist-util-visit";

export default function plugin() {
  return function (tree) {
    visit(tree, ["text"], function (node, _, parent) {
      if (node.type === "text") {
        console.log(parent);
      }
      node.data = {
        ...node.data,
        highlight: true,
      };
    });
  };
}
