import { NODES_TYPES } from '@src/contants/nodesTypes'
import { cn } from '@src/lib/utils'
import { ComponentProps, useCallback, useMemo } from 'react'
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  Node,
  NodeTypes,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow'

import 'reactflow/dist/style.css'

const initialNodes: Node[] = [
  {
    width: 155,
    height: 50,
    id: 'ddc14e2c-9a21-4453-a591-a3fbc3749572',
    type: 'LOG',
    position: {
      x: 73.66818985854945,
      y: 339.44393671381687,
    },
    data: {
      config: {
        message: '"Log else"',
      },
    },
    selected: true,
    dragging: false,
    positionAbsolute: {
      x: 73.66818985854945,
      y: 339.44393671381687,
    },
  },
  {
    width: 218,
    height: 50,
    id: '5bba3555-5b9d-4a97-af7b-301b1a2c9185',
    type: 'LOG',
    position: {
      x: 471.3505587950474,
      y: 622.164357162832,
    },
    data: {
      config: {
        message: '"log condicional 3"',
      },
    },
    selected: false,
    positionAbsolute: {
      x: 471.3505587950474,
      y: 622.164357162832,
    },
    dragging: false,
  },
  {
    width: 218,
    height: 50,
    id: '24d753ff-0add-4755-9038-289b86298c19',
    type: 'LOG',
    position: {
      x: 471.3505587950475,
      y: 503.1806066917659,
    },
    data: {
      config: {
        message: '"log condicional 2"',
      },
    },
    selected: false,
    positionAbsolute: {
      x: 471.3505587950475,
      y: 503.1806066917659,
    },
    dragging: false,
  },
  {
    width: 133,
    height: 50,
    id: '614d6b35-f219-4e07-a6a6-6a63f3aea3e1',
    type: 'CONDITIONAL',
    position: {
      x: 331.90463467609084,
      y: 419.51305222039184,
    },
    data: {},
    selected: false,
    positionAbsolute: {
      x: 331.90463467609084,
      y: 419.51305222039184,
    },
    dragging: false,
  },
  {
    width: 157,
    height: 50,
    id: '85111726-c0d8-40e3-a7cb-90fa7bb1d73d',
    type: 'LOG',
    position: {
      x: -130.58858340868738,
      y: 550.4006128064359,
    },
    data: {
      config: {
        message: '"Log final"',
      },
    },
    selected: false,
    positionAbsolute: {
      x: -130.58858340868738,
      y: 550.4006128064359,
    },
    dragging: false,
  },
  {
    width: 243,
    height: 50,
    id: '74e7bcb1-9435-4fcc-a420-76d4e3a40f1b',
    type: 'LOG',
    position: {
      x: 132.28402629377342,
      y: 719.7638884258824,
    },
    data: {
      config: {
        message: '"Log final condicional"',
      },
    },
    selected: false,
    positionAbsolute: {
      x: 132.28402629377342,
      y: 719.7638884258824,
    },
    dragging: false,
  },
  {
    width: 208,
    height: 50,
    id: '2342077c-354a-462f-a12e-e877ba12d90f',
    type: 'LOG',
    position: {
      x: 375,
      y: 313,
    },
    data: {
      config: {
        message: '"Log condicional"',
      },
    },
    selected: false,
    positionAbsolute: {
      x: 375,
      y: 313,
    },
    dragging: false,
  },
  {
    width: 133,
    height: 50,
    id: 'cf908fb6-2a78-4648-9099-29763b50896e',
    type: 'CONDITIONAL',
    position: {
      x: 209,
      y: 232,
    },
    data: {},
    selected: false,
    positionAbsolute: {
      x: 209,
      y: 232,
    },
    dragging: false,
  },
  {
    width: 168,
    height: 50,
    id: '87e3c8b6-3ebd-4d5f-b215-c042ee7b7c91',
    type: 'LOG',
    position: {
      x: 191.58267235360438,
      y: 106.27775982828825,
    },
    data: {
      config: {
        message: '"Log inicial"',
      },
    },
    selected: false,
    positionAbsolute: {
      x: 191.58267235360438,
      y: 106.27775982828825,
    },
    dragging: false,
  },
  {
    width: 150,
    height: 40,
    id: 'start',
    type: 'input',
    data: {
      label: 'Inicio',
    },
    position: {
      x: 200.5525376757406,
      y: -25.138992347769914,
    },
    selected: false,
    positionAbsolute: {
      x: 200.5525376757406,
      y: -25.138992347769914,
    },
    dragging: false,
  },
]
const initialEdges: Edge[] = [
  {
    type: 'step',
    source: 'start',
    sourceHandle: null,
    target: '87e3c8b6-3ebd-4d5f-b215-c042ee7b7c91',
    targetHandle: null,
    id: 'reactflow__edge-start-87e3c8b6-3ebd-4d5f-b215-c042ee7b7c91',
  },
  {
    type: 'step',
    source: '87e3c8b6-3ebd-4d5f-b215-c042ee7b7c91',
    sourceHandle: 'right',
    target: 'cf908fb6-2a78-4648-9099-29763b50896e',
    targetHandle: null,
    id: 'reactflow__edge-87e3c8b6-3ebd-4d5f-b215-c042ee7b7c91right-cf908fb6-2a78-4648-9099-29763b50896e',
  },
  {
    type: 'step',
    source: 'cf908fb6-2a78-4648-9099-29763b50896e',
    sourceHandle: 'right',
    target: '2342077c-354a-462f-a12e-e877ba12d90f',
    targetHandle: null,
    id: 'reactflow__edge-cf908fb6-2a78-4648-9099-29763b50896eright-2342077c-354a-462f-a12e-e877ba12d90f',
  },
  {
    type: 'step',
    source: '74e7bcb1-9435-4fcc-a420-76d4e3a40f1b',
    sourceHandle: 'right',
    target: '85111726-c0d8-40e3-a7cb-90fa7bb1d73d',
    targetHandle: null,
    id: 'reactflow__edge-74e7bcb1-9435-4fcc-a420-76d4e3a40f1bright-85111726-c0d8-40e3-a7cb-90fa7bb1d73d',
  },
  {
    type: 'step',
    source: '2342077c-354a-462f-a12e-e877ba12d90f',
    sourceHandle: 'right',
    target: '614d6b35-f219-4e07-a6a6-6a63f3aea3e1',
    targetHandle: null,
    id: 'reactflow__edge-2342077c-354a-462f-a12e-e877ba12d90fright-614d6b35-f219-4e07-a6a6-6a63f3aea3e1',
  },
  {
    type: 'step',
    source: '614d6b35-f219-4e07-a6a6-6a63f3aea3e1',
    sourceHandle: 'left',
    target: '74e7bcb1-9435-4fcc-a420-76d4e3a40f1b',
    targetHandle: null,
    id: 'reactflow__edge-614d6b35-f219-4e07-a6a6-6a63f3aea3e1left-74e7bcb1-9435-4fcc-a420-76d4e3a40f1b',
  },
  {
    type: 'step',
    source: '614d6b35-f219-4e07-a6a6-6a63f3aea3e1',
    sourceHandle: 'right',
    target: '24d753ff-0add-4755-9038-289b86298c19',
    targetHandle: null,
    id: 'reactflow__edge-614d6b35-f219-4e07-a6a6-6a63f3aea3e1right-24d753ff-0add-4755-9038-289b86298c19',
  },
  {
    type: 'step',
    source: '24d753ff-0add-4755-9038-289b86298c19',
    sourceHandle: 'right',
    target: '5bba3555-5b9d-4a97-af7b-301b1a2c9185',
    targetHandle: null,
    id: 'reactflow__edge-24d753ff-0add-4755-9038-289b86298c19right-5bba3555-5b9d-4a97-af7b-301b1a2c9185',
  },
  {
    type: 'step',
    source: '5bba3555-5b9d-4a97-af7b-301b1a2c9185',
    sourceHandle: 'right',
    target: '74e7bcb1-9435-4fcc-a420-76d4e3a40f1b',
    targetHandle: null,
    id: 'reactflow__edge-5bba3555-5b9d-4a97-af7b-301b1a2c9185right-74e7bcb1-9435-4fcc-a420-76d4e3a40f1b',
  },
  {
    source: 'cf908fb6-2a78-4648-9099-29763b50896e',
    sourceHandle: 'left',
    target: 'ddc14e2c-9a21-4453-a591-a3fbc3749572',
    targetHandle: null,
    type: 'step',
    id: 'reactflow__edge-cf908fb6-2a78-4648-9099-29763b50896eleft-ddc14e2c-9a21-4453-a591-a3fbc3749572',
  },
  {
    source: 'ddc14e2c-9a21-4453-a591-a3fbc3749572',
    sourceHandle: 'right',
    target: '74e7bcb1-9435-4fcc-a420-76d4e3a40f1b',
    targetHandle: null,
    type: 'step',
    id: 'reactflow__edge-ddc14e2c-9a21-4453-a591-a3fbc3749572right-74e7bcb1-9435-4fcc-a420-76d4e3a40f1b',
  },
]

export default function Flow({
  className,
  ...props
}: Omit<ComponentProps<'div'>, 'children'>) {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (connection: Connection) =>
      setEdges((eds) => addEdge({ ...connection, type: 'step' }, eds)),
    [setEdges],
  )

  const nodeTypes = useMemo<NodeTypes>(
    () =>
      Object.entries(NODES_TYPES).reduce(
        (old, [type, { element }]) => ({ ...old, [type]: element }),
        {},
      ),
    [],
  )

  return (
    <div {...props} className={cn('h-100 w-100', className)}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}
