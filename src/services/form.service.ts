class FormService {
  private formCollection: any = {}

  constructor() {}

  public setCollection(collection: string) {
    this.formCollection[collection] = {}
  }

  public saveData(collection: string, keyForm: string, valueForm: string) {
    this.formCollection[collection][keyForm] = valueForm
  }

  public getData(collection: string) {
    return this.formCollection[collection]
  }
}

const formService = new FormService()

export default formService
