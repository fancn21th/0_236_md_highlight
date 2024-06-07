import { visit } from "unist-util-visit";

let cursor = 0;

export default function plugin(options) {
  const { start, end } = options;
  return function (tree) {
    visit(tree, ["text"], function (node, index, parent) {
      console.log({ node });

      const currentStart = cursor;
      const currentEnd = cursor + node.value.length;

      cursor = currentEnd;

      // console.log({ cursor, v: node.value });

      if (currentStart < end && currentEnd > start) {
        console.log({ currentStart, currentEnd, start, end, v: node.value });
        parent.data = {
          ...parent.data,
          highlight: true,
        };
      }
    });
  };
}
