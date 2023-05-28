import axios from 'axios'
import parserHTML from '../services/parserHTML.service'
import Tab from '../components/tab'

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
    const tab = await new Tab().buildComponent()
    await this.page.appendChild(tab)
  }

  private addToApp() {
    const app = document.getElementById('app')!
    app.appendChild(this.page)
  }
}

export default Index
