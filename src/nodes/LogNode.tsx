import Node from '@src/components/node'
import { TInfo } from '@src/contants/nodesTypes'
import { generateCode, getNextNode } from '@src/utils/utils'
import { Handle, NodeProps, Position } from 'reactflow'

export type TLogNodeData = {
  config?: {
    message?: string
  }
}

export default {
  name: 'Log',
  generateCode(node, nodes, edges, options) {
    let tempCode = `console.log(${
      node.data.config?.message || '"Hello World!"'
    });`

    const next = getNextNode(node, nodes, edges)

    if (next.right && options?.recursive) {
      tempCode += generateCode(next.right!, nodes, edges, options)
    }

    return tempCode
  },
  element({ selected, data }: NodeProps<TLogNodeData>) {
    return (
      <>
        <Handle type="target" position={Position.Top} />
        <Node isSelected={selected}>Log: {data.config?.message}</Node>
        <Handle type="source" id="right" position={Position.Bottom} />
      </>
    )
  },
} as TInfo<TLogNodeData>
