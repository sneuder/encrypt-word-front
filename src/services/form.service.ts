// import { FormCollection } from '../interfaces'

interface FormCollection {
  [key: string]: { [key: string]: string }
}

class FormService {
  private formCollection: FormCollection = {}

  constructor() {}

  public createCollection(collectionName: string) {
    this.formCollection[collectionName] = {}
  }

  public setPropertyCollection(collectionName: string, propertyName: string) {
    this.formCollection[collectionName][propertyName] = ''
  }

  public saveData(collection: string, keyForm: string, valueForm: string) {
    this.formCollection[collection][keyForm] = valueForm
  }

  public getData(collection: string) {
    return this.formCollection[collection]
  }

  public validateData(collection: string) {
    return Object.values(this.formCollection[collection]).every((value) => {
      if (value !== '') return true
      return false
    })
  }
}

const formService = new FormService()

export default formService
