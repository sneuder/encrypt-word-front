import axios from 'axios'
import parserHTML from '../../services/parserHTML.service'

class TextArea {
  private textArea: any = `
    <div class="" id="inputContainer">
      <textarea
        id="textarea"
        class="w-full h-40 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      ></textarea>
    </div>
  `

  private settings = {
    placeholder: '',
  }

  constructor(placeholder: string) {
    this.settings.placeholder = placeholder
  }

  public async buildComponent() {
    this.textArea = parserHTML.parse('inputContainer', this.textArea)

    this.textArea.querySelector('#textarea')!.placeholder =
      this.settings.placeholder

    return this.textArea
  }
}

export default TextArea
