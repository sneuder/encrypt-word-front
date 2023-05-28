import axios from 'axios'
import getInput from '../input'

import parserHTML from '../../features/parserHTML'

import formService from '../../services/form.service'
import cryptService from '../../services/crypt.service'

class Form {
  private form: any
  private components: any = { inputWords: undefined, inputKeyWords: undefined }

  private formType: string
  private formService = formService
  private cryptService = cryptService

  constructor(formType: string) {
    this.formType = formType
    this.formService.setCollection(formType)
  }

  private setSettings() {}

  public async buildComponent() {
    this.form = (await axios.get('/src/components/form/index.html')).data
    this.form = parserHTML('form', this.form)

    await this.addComponents()
    this.addEvents()

    return this.form
  }

  private async addComponents() {
    this.components.inputWords = await getInput('Text to encrypt')
    this.components.inputKeyWords = await getInput('Key Word')

    this.form.insertBefore(this.components.inputKeyWords, this.form.firstChild)
    this.form.insertBefore(this.components.inputWords, this.form.firstChild)
  }

  private addEvents() {
    this.components.inputWords.addEventListener('input', (event: any) => {
      const value = event.target.value
      this.formService.saveData(this.formType, 'words', value)
    })

    this.components.inputKeyWords.addEventListener('input', (event: any) => {
      const value = event.target.value
      this.formService.saveData(this.formType, 'keywords', value)
    })

    this.form.addEventListener('submit', async (event: any) => {
      event.preventDefault()
      const dataToSend = this.formService.getData(this.formType)
      const dataResponse = (await this.cryptService.encrypt(dataToSend)).data
    })
  }
}

export default Form
