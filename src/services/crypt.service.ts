import axios from 'axios'

import { EndPoints } from '../interfaces/enums'
import { EndPoint } from '../interfaces/types'

class Crypt {
  // private url: string = 'http://localhost:8080/api/'
  private url: string = 'https://encrypt-words.onrender.com/api/'

  public encrypt(dataToEncrypt: any) {
    const options = this.getOptions(dataToEncrypt, EndPoints.ENCRYPT)
    return axios(options)
  }

  public decrypt(dataToDecrypt: any) {
    const options = this.getOptions(dataToDecrypt, EndPoints.DECRYPT)
    return axios(options)
  }

  private getOptions(dataToProcess: any, EndPoint: EndPoint) {
    return {
      method: 'post',
      url: `${this.url}${EndPoint}`,
      data: dataToProcess,
    }
  }
}

const cryptService = new Crypt()
export default cryptService
