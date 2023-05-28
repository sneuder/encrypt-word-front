import axios from 'axios'
import parserHTML from '../features/parserHTML'
import Form from '../components/form'

class Index {
  page: any

  constructor() {}

  public async buildComponent() {
    this.page = (await axios.get('/src/page/index.html')).data
    this.page = parserHTML('index-page', this.page)

    const app = document.getElementById('app')!
    this.addComponents()

    app.appendChild(this.page)
  }

  private async addComponents() {
    const form = await new Form('encrypt').buildComponent()
    await this.page.appendChild(form)
  }
}

export default Index
