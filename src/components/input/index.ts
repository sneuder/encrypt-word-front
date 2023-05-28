import axios from 'axios'
import parserHTML from '../../features/parserHTML'

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
    this.input = parserHTML('inputContainer', this.input.data) as HTMLElement
    this.input.querySelector('#input')!.placeholder = this.settings.placeholder

    return this.input
  }
}

export default Input
