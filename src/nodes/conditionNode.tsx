import NodeLayout from '@src/components/node'
import { TInfo } from '@src/contants/nodesTypes'
import { generateCode, getNextNode, getNodeConnections } from '@src/utils/utils'
import { Edge, Handle, Node, NodeProps, Position } from 'reactflow'

type TConditionalNodeData = {
  name: string
}

export default {
  name: 'Condicional',
  generateCode(node, nodes, edges, options) {
    const { left, right } = getNextNode(node, nodes, edges)

    if (!left || !right) {
      throw new Error('Condicional precisa de dois nós')
    }

    let hasElse = false
    let nodeStop: Node | undefined
    const leftConnections = getNodeConnections(left, nodes, edges)
    const rightConnections = getNodeConnections(right, nodes, edges)
    for (const leftConnection of leftConnections) {
      for (const rightConnection of rightConnections) {
        if (leftConnection.id === rightConnection.id) {
          nodeStop = leftConnection
          break
        }
      }
      if (nodeStop) break
      hasElse = true
    }

    if (!nodeStop) {
      throw new Error('Condicional precisa de um nó de parada')
    }

    console.log({ nodeStop })

    let tempCode = 'if() {'

    tempCode += generateCodeByConnection(
      rightConnections,
      nodeStop,
      nodes,
      edges,
    )

    if (hasElse) {
      tempCode += '} else {'
      tempCode += generateCodeByConnection(
        leftConnections,
        nodeStop,
        nodes,
        edges,
      )
    }

    tempCode += '}'

    if (options?.recursive) {
      tempCode += generateCode(nodeStop, nodes, edges, { recursive: true })
    }

    return tempCode
  },
  element({ selected }: NodeProps<TConditionalNodeData>) {
    return (
      <>
        <Handle type="target" position={Position.Top} />
        <NodeLayout isSelected={selected}>Condicional</NodeLayout>
        <Handle type="source" id="left" position={Position.Left}>
          <span className="inline-block -translate-x-full -translate-y-full text-muted-foreground">
            Falso
          </span>
        </Handle>
        <Handle type="source" id="right" position={Position.Right}>
          <span className="ml-1 inline-block -translate-y-full text-muted-foreground">
            Verdadeiro
          </span>
        </Handle>
      </>
    )
  },
} as TInfo<TConditionalNodeData>

function generateCodeByConnection(
  connections: Node[],
  nodeStop: Node,
  nodes: Node[],
  edges: Edge[],
) {
  let tempCode = ''
  for (const item of connections) {
    if (item.id === nodeStop.id) break
    tempCode += generateCode(item, nodes, edges, {
      recursive: false,
    })
    if (item.type === 'CONDITIONAL') break
  }
  return tempCode
}
