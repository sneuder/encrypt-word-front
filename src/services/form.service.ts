import * as crypt from './crypt.service'

const dataForm: { [key: string]: string | number } = {}

export const sendData = (event: any, cryptService: any, dataToCrypt: any) => {
  event.preventDefault()
  return crypt[cryptService as 'encrypt'](dataToCrypt)
}

export const saveData = (keyForm: string, valueForm: string | number) => {
  dataForm[keyForm] = valueForm
}

export const getData = () => {}

export const validateData = () => {}
