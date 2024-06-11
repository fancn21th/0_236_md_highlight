import { visit } from "unist-util-visit";

function findBeginningPart(
  nodeTxt: string,
  searchTxt: string // TODO: searchTxt should be preprocessed
): {
  txt: string; //
} {
  const nodeTxts = nodeTxt.split(" ").reverse();
  const searchTxts = searchTxt.split(" ").reverse();

  let idx = 0;

  while (nodeTxts[idx] === searchTxts[idx] && idx < nodeTxts.length) {
    idx++;
  }

  return {
    txt: nodeTxts.slice(0, idx).reverse().join(" "),
  };
}

function getSplittedChildren(nodeTxt: string, splitTxt: string): any[] {
  const children = nodeTxt.split(splitTxt).map((txt) => {
    return {
      type: "text",
      value: txt,
    };
  });

  children.splice(1, 0, {
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

// 这个插件的核心功能是给每个需要高亮的 text 节点 增加额外的信息
// 这个信息参考 https://github.com/syntax-tree/mdast-util-to-hast#fields-on-nodes
// 通过这个信息可以控制 hast 到 html 的转换 中的一些转换细节
export default function plugin(options) {
  const { searchTxt } = options;

  return function (tree) {
    visit(tree, ["text"], function (node, index, parent) {
      // 父节点如果高亮
      if (parent && parent.data && parent.data.highlight) {
        // case 1
        if (node.data.isCurrentNodeAtTheBeginning) {
          const { txt } = findBeginningPart(node.value, searchTxt);
          const children = getSplittedChildren(node.value, txt);
          console.log({ children, txt });

          const paragraphNode = {
            type: "paragraph",
            children,
          }; // 创建新的 `paragraph` 节点

          parent.children.splice(index, 1, paragraphNode); // 替换旧的节点

          parent.data = {
            ...parent.data,
            hName: "div",
          };
        } else if (node.data.isCurrentNodeAtTheEnd) {
          //
        }
      }
    });
  };
}
