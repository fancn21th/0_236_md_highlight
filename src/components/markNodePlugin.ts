import { visit } from "unist-util-visit";

//  keep track of the position of search txt
let cursor = 0;

// get rid of all the characters that are not Chinese, English, or numbers
// const regex = /[^\u4e00-\u9fa5a-zA-Z0-9]/g;

/**
 *  there are three cases to consider:
 *
 *  1. current node is at the beginning of the search text
 *  2. current node is in the middle of the search text
 *  3. current node is at the end of the search text
 *
 */

export default function plugin(options) {
  const { start, end } = options;

  return function (tree) {
    visit(tree, ["text"], function (node, _, parent) {
      const currentStart = cursor; // 当前节点的开始位置
      const currentEnd = currentStart + node.value.length - 1; // 当前节点的结束位置
      cursor = currentEnd + 1; // 更新游标

      // 基本 信息
      node.data = {
        ...node.data,
        currentStart,
        currentEnd,
      };

      if (currentStart < end && currentEnd > start) {
        if (currentStart <= start) {
          // case 1
          node.data = {
            ...node.data,
            isCurrentNodeAtTheBeginning: true,
          };
        } else if (currentEnd >= end) {
          // case 3
          node.data = {
            ...node.data,
            isCurrentNodeAtTheEnd: true,
          };
        } else {
          // case 2
          node.data = {
            ...node.data,
            isCurrentNodeInTheMiddle: true,
          };
        }

        if (parent) {
          parent.data = {
            ...parent.data,
            highlight: true,
          };
        } else {
          throw new Error("Parent not found");
        }

        console.log({ node, parent });
      }
    });
  };
}
