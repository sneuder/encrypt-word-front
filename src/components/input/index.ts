import axios from 'axios'
import parserHTML from '../../services/parserHTML.service'

class Input {
  private input: any
  private settings = {
    placeholder: '',
  }

  constructor(placeholder: string) {
    this.settings.placeholder = placeholder
  }

  public async buildComponent() {
    this.input = await axios.get('/src/components/input/index.html')
    this.input = parserHTML.parse('inputContainer', this.input.data)
    this.input.querySelector('#input')!.placeholder = this.settings.placeholder

    return this.input
  }
}

export default Input
