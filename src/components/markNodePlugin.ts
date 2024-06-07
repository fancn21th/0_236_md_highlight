import { visit } from "unist-util-visit";

let cursor = 0;

/**
 * 插件函数，用于处理树形结构中的文本和行内代码节点,标记高亮节点
 *
 * @param options 插件选项对象
 * @param options.start 文本高亮起始位置
 * @param options.end 文本高亮结束位置
 * @returns 返回一个处理树形结构的函数
 */
export default function plugin(options) {
  const { start, end } = options;
  return function (tree) {
    //增加 inlineCode ，inlineCode经常出现在段落中
    visit(tree, ["text", "inlineCode", "list"], function (node, index, parent) {
      if (node.type === "list") {
        /*
        markdown的某些列表无法正常高亮，另外处理
        
        原因：
        Markdown文档的列表语法，如果列表项的上下有空行（或者第一项上下有空行），解析出来的AST树中，列表项的spread为true，否则为false。
        spread为true列表可以正常高亮，否则无法高亮（目前原因未知），所以手动把AST中的spread改为true
         
         */
        node.spread = true;
      } else {
        const currentStart = cursor;
        const currentEnd = cursor + node.value.length;

        cursor = currentEnd;

        if (currentStart < end && currentEnd > start) {
          parent.data = {
            ...parent.data,
            highlight: true,
          };
        }
      }
    });
  };
}
