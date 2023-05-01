import axios from 'axios'
import getInput from '../input'
import parserHTML from '../../features/parserHTML'

async function startForm() {
  try {
    let form = (await axios.get('/src/components/form/index.html')).data
    form = parserHTML('form', form)

    const inputEncrypt = await getInput('Text to encrypt')
    const inputKeyWord = await getInput('Key Word')

    form.insertBefore(inputKeyWord, form.firstChild)
    form.insertBefore(inputEncrypt, form.firstChild)

    const app = document.getElementById('app')!
    app.appendChild(form)
  } catch (e) {
    console.log(e)
  }
}

export default startForm
