import { visit } from "unist-util-visit";

function findBeginningPart(
  nodeTxt: string,
  searchTxt: string
): { idx: number; txt: string } {
  const words = nodeTxt.split(" ");
  let startIndex = -1;
  const hasWord = words.some((word: string, index: number) => {
    const isStart = searchTxt.startsWith(word);
    if (isStart) {
      startIndex = index;
    }
    return isStart;
  });
  if (!hasWord) {
    throw new Error("no word found");
  }
  return {
    idx: startIndex,
    txt: words[startIndex],
  };
}

function getSplittedChildren(
  nodeTxt: string,
  splitTxt: string,
  index: number
): any[] {
  const children = nodeTxt.split(splitTxt).map((txt) => {
    return {
      type: "text",
      value: txt,
    };
  });

  children.splice(index, 0, {
    type: "inlineCode",
    value: splitTxt,
    data: { hProperties: { className: ["i-am-highlighted"] } },
  });

  return children;
}

/**
 *  there are three cases to consider:
 *
 *  1. current node is at the beginning of the search text
 *  2. current node is in the middle of the search text
 *  3. current node is at the end of the search text
 *
 */

export default function plugin(options) {
  const { searchTxt } = options;

  return function (tree) {
    visit(tree, ["text"], function (node, index, parent) {
      // 父节点如果高亮
      if (parent && parent.data && parent.data.highlight) {
        // case 1
        if (node.data.isCurrentNodeAtTheBeginning) {
          const { idx, txt } = findBeginningPart(node.value, searchTxt);
          const children = getSplittedChildren(node.value, txt, idx);
          console.log({ children });

          const paragraphNode = {
            type: "paragraph",
            children,
          }; // 创建新的 `paragraph` 节点

          parent.children.splice(index, 1, paragraphNode); // 替换旧的节点
        } else {
          parent.data = {
            ...parent.data,
            hProperties: { className: "i-am-highlighted" },
          };
        }
      }
    });
  };
}
