import { visit } from "unist-util-visit";

export default function plugin() {
  return function (tree) {
    visit(tree, ["paragraph"], function (node) {
      // console.log({ node });

      if (node.data && node.data.highlight) {
        node.data = {
          ...node.data,
          hProperties: { className: "i-am-highlighted" },
        };
      }
    });
  };
}
