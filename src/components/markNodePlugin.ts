import { visit } from "unist-util-visit";

let cursor = 0;

export default function plugin(options) {
  const { start, end } = options;
  return function (tree) {
    visit(tree, ["text"], function (node, index, parent) {
      // console.log({ node });

      const currentStart = cursor;
      const currentEnd = cursor + node.value.length;

      cursor = currentEnd;

      if (currentStart < end && currentEnd > start) {
        parent.data = {
          ...parent.data,
          highlight: true,
        };
      }
    });
  };
}
