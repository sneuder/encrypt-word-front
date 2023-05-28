import axios from 'axios'
import parserHTML from '../services/parserHTML.service'
import Form from '../components/form'

class Index {
  page: any

  constructor() {}

  public async buildComponent() {
    this.page = (await axios.get('/src/page/index.html')).data
    this.page = parserHTML.parse('index-page', this.page)

    this.addComponents()
    this.addToApp()
  }

  private async addComponents() {
    const form = await new Form('encrypt').buildComponent()
    await this.page.appendChild(form)
  }

  private addToApp() {
    const app = document.getElementById('app')!
    app.appendChild(this.page)
  }
}

export default Index
