import { NODES_TYPES, TGenerateCodeOptions } from '@src/contants/nodesTypes'
import { Edge, Node, getConnectedEdges } from 'reactflow'

type TNodeTypes = keyof typeof NODES_TYPES

export function getNextNode(node: Node, nodes: Node[], edges: Edge[]) {
  const targetEdges = getConnectedEdges([node], edges).filter((item) => {
    return item.target !== node.id
  })

  const rightEdge = targetEdges.find(
    (item) => (item.sourceHandle ?? 'right') === 'right',
  )
  const leftEdge = targetEdges.find((item) => item.sourceHandle === 'left')

  return {
    right: rightEdge && nodes.find((item) => item.id === rightEdge.target),
    left: leftEdge && nodes.find((item) => item.id === leftEdge.target),
  }
}

export function generateCode(
  node: Node,
  nodes: Node[],
  edges: Edge[],
  options?: TGenerateCodeOptions,
): string {
  const type = node.type
  return NODES_TYPES[type as TNodeTypes].generateCode(
    node,
    nodes,
    edges,
    options,
  )
}

export function getNodeConnections(node: Node, nodes: Node[], edges: Edge[]) {
  const connections: Node[] = []

  let nextNode: Node | undefined = node
  do {
    connections.push(nextNode)

    const { right } = getNextNode(nextNode, nodes, edges)
    nextNode = right
  } while (nextNode)

  return connections
}
