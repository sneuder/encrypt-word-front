import parserHTML from '../../services/parserHTML.service'

class Input {
  private input: any = `
    <div class="" id="inputContainer">
      <input
        type="text"
        id="input"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
    </div>
  `

  private settings = {
    placeholder: '',
  }

  constructor(placeholder: string) {
    this.settings.placeholder = placeholder
  }

  public async buildComponent() {
    this.input = parserHTML.parse('inputContainer', this.input)
    this.input.querySelector('#input')!.placeholder = this.settings.placeholder

    return this.input
  }
}

export default Input
