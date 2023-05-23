import axios from 'axios'
import parserHTML from '../features/parserHTML'
import getForm from '../components/form'

async function startIndexPage() {
  try {
    let page = (await axios.get('/src/page/index.html')).data
    page = parserHTML('index-page', page)

    const app = document.getElementById('app')!
    addComponents(page)

    app.appendChild(page)
  } catch (e) {
    console.log(e)
  }
}

async function addComponents(page: any) {
  const form = await getForm()
  page.appendChild(form)
}

export default startIndexPage
