//Component from https://github.com/daniel-hauser/react-organizational-chart/

import * as React from "react"
import { css } from "@emotion/css"

import TreeNode from "./TreeNode"

/**
 * The root of the hierarchy tree
 */
function Tree({
  children,
  label,
  lineHeight = "20px",
  lineWidth = "1px",
  lineColor = "black",
  nodePadding = "5px",
  lineStyle = "solid",
  lineBorderRadius = "5px"
}) {
  return (
    <ul
      className={css`
        padding-inline-start: 0;
        margin: 0;
        display: flex;

        --line-height: ${lineHeight};
        --line-width: ${lineWidth};
        --line-color: ${lineColor};
        --line-border-radius: ${lineBorderRadius};
        --line-style: ${lineStyle};
        --node-padding: ${nodePadding};

        --tree-line-height: var(--line-height, 20px);
        --tree-line-width: var(--line-width, 1px);
        --tree-line-color: var(--line-color, black);
        --tree-line-border-radius: var(--line-border-radius, 5px);
        --tree-node-line-style: var(--line-style, solid);
        --tree-node-padding: var(--node-padding, 5px);
      `}
    >
      <TreeNode label={label}>{children}</TreeNode>
    </ul>
  )
}

export default Tree
