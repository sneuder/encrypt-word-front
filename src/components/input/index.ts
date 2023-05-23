import axios from 'axios'
import parserHTML from '../../features/parserHTML'

function getInput(placeholder: string) {
  return axios.get('/src/components/input/index.html').then((res) => {
    const input = parserHTML('inputContainer', res.data) as HTMLElement
    input.querySelector('#input')!.placeholder = placeholder
    return input
  })
}

export default getInput
