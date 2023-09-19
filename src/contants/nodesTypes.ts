import LogNode from '@src/nodes/LogNode'
import ConditionalNode from '@src/nodes/conditionNode'
import { ComponentType } from 'react'
import { Edge, Node, NodeProps } from 'reactflow'

export type TGenerateCodeOptions = {
  recursive?: boolean
}

export type TInfo<D> = {
  name: string
  element: ComponentType<NodeProps<D>>
  generateCode(
    node: Node<D>,
    nodes: Node[],
    edges: Edge[],
    options?: TGenerateCodeOptions,
  ): string
}

export const NODES_TYPES = {
  LOG: LogNode,
  CONDITIONAL: ConditionalNode,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} satisfies Record<string, TInfo<any>>
