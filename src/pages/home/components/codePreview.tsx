import { Button } from '@src/components/ui/button'
import { generateCode } from '@src/utils/utils'
import { js_beautify as JsBeautify } from 'js-beautify'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { Node, getOutgoers, useReactFlow } from 'reactflow'

export default function CodePreview() {
  const [code, setCode] = useState('')

  const { getNode, getNodes, getEdges } = useReactFlow()

  function handleGenerateCode(node?: Node) {
    const startNode = getNode('start')
    if (!startNode) return

    const currentNode =
      node ?? getOutgoers(startNode, getNodes(), getEdges())[0]

    if (!currentNode) return

    const code = generateCode(currentNode, getNodes(), getEdges(), {
      recursive: true,
    })

    setCode(code)
  }

  return (
    <>
      <SyntaxHighlighter language="javascript" showLineNumbers>
        {JsBeautify(code, { indent_size: 2 })}
      </SyntaxHighlighter>

      <Button
        onClick={() => {
          setCode('')
          handleGenerateCode()
        }}
        className="mx-auto"
      >
        Gerar Código
      </Button>
    </>
  )
}
