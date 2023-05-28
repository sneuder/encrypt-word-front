import axios from 'axios'
import getInput from '../input'
import parserHTML from '../../features/parserHTML'
import * as formService from '../../services/form.service'

class Form {
  public form: any
  private formType: string = ''

  constructor(formType: string) {
    this.formType = formType
  }

  public async buildComponent() {
    this.form = (await axios.get('/src/components/form/index.html')).data
    this.form = parserHTML('form', this.form)

    this.addComponents()

    return this.form
  }

  private async addComponents() {
    const inputEncrypt = await getInput('Text to encrypt')
    const inputKeyWord = await getInput('Key Word')

    this.form.insertBefore(inputKeyWord, this.form.firstChild)
    this.form.insertBefore(inputEncrypt, this.form.firstChild)
  }

  private addEvents() {}
}

export default Form
