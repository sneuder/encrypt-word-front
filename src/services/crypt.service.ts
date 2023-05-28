import axios from 'axios'

class Crypt {
  private url: string = 'http://localhost:8080/api/'

  public encrypt(dataToEncrypt: any) {
    const options = this.getOptions(dataToEncrypt)
    return axios(options)
  }

  private getOptions(dataToEncrypt: any) {
    return {
      method: 'post',
      url: `${this.url}encrypt`,
      data: dataToEncrypt,
    }
  }
}

const cryptService = new Crypt()
export default cryptService
