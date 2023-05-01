const parser = new DOMParser()

function parserHTML(idNode: string, node: string) {
  const html = parser.parseFromString(node, 'text/html')
  return html.querySelector(`#${idNode}`)!
}

export default parserHTML
