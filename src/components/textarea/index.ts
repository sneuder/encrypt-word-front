import axios from 'axios'
import parserHTML from '../../features/parserHTML'

class TextArea {
  private textArea: any
  private settings = {
    placeholder: '',
  }

  constructor(placeholder: string) {
    this.settings.placeholder = placeholder
  }

  public async buildComponent() {
    this.textArea = await axios.get('/src/components/textarea/index.html')
    this.textArea = parserHTML('inputContainer', this.textArea.data)

    this.textArea.querySelector('#textarea')!.placeholder =
      this.settings.placeholder

    return this.textArea
  }
}

export default TextArea
