import axios from 'axios'

import Input from '../input'
import TextArea from '../textarea'

import formService from '../../services/form.service'
import cryptService from '../../services/crypt.service'
import formInstuctions from '../../instructions/form.instructions'
import parserHTML from '../../services/parserHTML.service'

class Form {
  private form: any
  private components: any = {}

  private inputs = {
    input: Input,
    textarea: TextArea,
  }

  private instruction

  constructor(formType: string) {
    this.instruction = formInstuctions[formType as keyof typeof formInstuctions]
    formService.createCollection(this.instruction.cryptService)
  }

  public async buildComponent() {
    this.form = (await axios.get('/src/components/form/index.html')).data
    this.form = parserHTML.parse('form', this.form)

    this.form.querySelector('#submit').textContent =
      this.instruction.titleSubmit

    await this.addComponents()
    await this.addEvents()

    return this.form
  }

  private async addComponents() {
    this.instruction.inputs = this.instruction.inputs.reverse()

    for (const input of this.instruction.inputs) {
      type InputsType = keyof typeof this.inputs
      this.components[input.name] = await new this.inputs[
        input.type as InputsType
      ](input.placeholder).buildComponent()

      formService.setPropertyCollection(
        this.instruction.collectionData,
        input.name
      )
      this.form.insertBefore(this.components[input.name], this.form.firstChild)
    }
  }

  private async addEvents() {
    for (const input of this.instruction.inputs) {
      this.components[input.name].addEventListener('input', (event: any) => {
        const value = event.target.value
        formService.saveData(this.instruction.cryptService, input.name, value)
      })
    }

    this.form.addEventListener('submit', async (event: any) => {
      event.preventDefault()
      if (!formService.validateData(this.instruction.cryptService)) return

      const dataToSend = formService.getData(this.instruction.cryptService)
      const dataResponse = (
        await cryptService[this.instruction.cryptService](dataToSend)
      ).data

      dataResponse
    })
  }
}

export default Form
