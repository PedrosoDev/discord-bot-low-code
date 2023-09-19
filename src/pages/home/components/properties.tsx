import { Button } from '@src/components/ui/button'
import { Input } from '@src/components/ui/input'
import { useRef } from 'react'
import { useReactFlow } from 'reactflow'

export default function Properties() {
  const inputRef = useRef<HTMLInputElement>(null)

  const { setNodes } = useReactFlow()

  function handleChangeLog() {
    if (!inputRef.current) return

    setNodes((prev) =>
      prev.map((node) => {
        if (!node.selected || node.type !== 'LOG') return node
        return {
          ...node,
          data: {
            config: {
              message: inputRef.current!.value,
            },
          },
        }
      }),
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <h1>Properties</h1>
      <Input ref={inputRef} type="text" />
      <Button onClick={handleChangeLog}>Change</Button>
    </div>
  )
}
