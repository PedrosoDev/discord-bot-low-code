import { Button } from '@src/components/ui/button'
import { NODES_TYPES } from '@src/contants/nodesTypes'
import { useReactFlow } from 'reactflow'
import { v4 as uuid } from 'uuid'

type TNodeTypes = keyof typeof NODES_TYPES

export default function NodesSidebar() {
  const { addNodes } = useReactFlow()

  function handleAddNode(type: TNodeTypes) {
    addNodes({
      id: uuid(),
      type,
      position: {
        x: 100,
        y: 100,
      },
      data: {},
    })
  }

  return (
    <aside className="w-72 border-r p-3">
      <h1 className="text-xl font-medium">Nodes</h1>

      <ul className="mt-3 space-y-2">
        {Object.entries(NODES_TYPES).map(([type, { name }]) => (
          <li key={type}>
            <Button
              onClick={() => handleAddNode(type as TNodeTypes)}
              className="w-full"
            >
              <span>{name}</span>
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
