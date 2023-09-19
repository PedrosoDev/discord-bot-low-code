import Flow from '@src/components/flow'
import { Button } from '@src/components/ui/button'
import { useReactFlow } from 'reactflow'
import CodePreview from './components/codePreview'
import NodesSidebar from './components/nodesSidebar'
import Properties from './components/properties'

export default function HomePage() {
  const { getNodes, getEdges } = useReactFlow()

  function handleSabePattern() {
    navigator.clipboard.writeText(`
    const initialNodes: Node[] = ${JSON.stringify(getNodes(), null, 2)}
    const initialEdges: Edge[] = ${JSON.stringify(getEdges(), null, 2)}	
    `)
  }

  return (
    <main className="grid h-screen w-screen grid-cols-[min-content_1fr_min-content]">
      <NodesSidebar />

      <Flow />

      <aside className="flex min-w-[250px] flex-col justify-evenly border-l">
        <Button onClick={handleSabePattern}>Salvar padrão</Button>

        <CodePreview />

        <Properties />
      </aside>
    </main>
  )
}
