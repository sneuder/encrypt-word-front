import axios from 'axios'

const url = 'http://localhost:8080/api/'

export const encrypt = (dataToEncrypt: any) => {
  const options = {
    method: 'post',
    url: `${url}encrypt`,
    data: dataToEncrypt,
  }

  return axios(options)
}

const decrypt = () => {}
