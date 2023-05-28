import axios from 'axios'

import {
  DataToEncrypt,
  DataToDecrypt,
  DataResponseEncrypt,
  DataResponseDecrypt,
} from '../interfaces'

import { EndPoints } from '../interfaces/enums'
import { EndPoint } from '../interfaces/types'

class Crypt {
  private url: string = 'http://localhost:8080/api/'

  public encrypt(dataToEncrypt: DataToEncrypt): Promise<DataResponseEncrypt> {
    const options = this.getOptions(dataToEncrypt, EndPoints.ENCRYPT)
    return axios(options)
  }

  public decrypt(dataToDecrypt: DataToDecrypt): Promise<DataResponseDecrypt> {
    const options = this.getOptions(dataToDecrypt, EndPoints.DECRYPT)
    return axios(options)
  }

  private getOptions(
    dataToProcess: DataToEncrypt | DataToDecrypt,
    EndPoint: EndPoint
  ) {
    return {
      method: 'post',
      url: `${this.url}${EndPoint}`,
      data: dataToProcess,
    }
  }
}

const cryptService = new Crypt()
export default cryptService
