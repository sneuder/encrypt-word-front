class ParserHTML {
  private parser = new DOMParser()

  public parse(idNode: string, node: string) {
    const html = this.parser.parseFromString(node, 'text/html')
    return html.querySelector(`#${idNode}`)!
  }
}

const parserHTML = new ParserHTML()
export default parserHTML
