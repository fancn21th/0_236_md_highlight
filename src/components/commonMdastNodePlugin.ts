import { visit } from "unist-util-visit";
interface Node {
  type: string;
  data?: {
    highlight?: boolean;
  };
  children?: Node[];
}

/**
 * 递归获取可添加高亮的AST节点的集合
 *
 * @param node AST节点
 * @returns AST类型名的数组
 */
function getASTTypes(node: Node) {
  const types = new Set();
  function traverse(node: Node) {
    if (node.data) types.add(node.type);
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        traverse(node.children[i]);
      }
    }
  }
  traverse(node);
  return [...types];
}

export default function plugin() {
  return function (tree) {
    const astNodeNames = getASTTypes(tree);
    console.log({ astNodeNames });

    visit(tree, astNodeNames, function (node) {
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

// const highlightedNVisitedNodes: string[] = [];

// export default function plugin() {
//   return function (tree) {
//     visit(tree, ["heading", "listItem"], function (node) {
//       // console.log({ node });

//       // hacker & trick
//       // for each node, it will be visited twice and somehow the data is missing in the second visit
//       // const key = `${node.position.start.line}:${node.position.start.column}:${node.position.end.line}:${node.position.end.column}`;

//       if (node.data && node.data.highlight) {
//         node.data = {
//           ...node.data,
//           hProperties: { className: "i-am-highlighted" },
//         };
//         // highlightedNVisitedNodes.push(key);
//       }

//       // if (highlightedNVisitedNodes.includes(key)) {
//       //   node.data = {
//       //     ...node.data,
//       //     hProperties: { className: "i-am-highlighted" },
//       //   };
//       // }
//     });
//   };
// }
