import axios from 'axios'
import parserHTML from '../services/parserHTML.service'
import Tab from '../components/tab'
import { notification } from '../components/notification'

class Index {
  page: any

  constructor() {}

  public async buildComponent() {
    this.page = (await axios.get('/src/page/index.html')).data
    this.page = parserHTML.parse('index-page', this.page)

    this.addComponents()
    this.addToApp()
    this.removeLoader()
  }

  private async addComponents() {
    const tab = await new Tab().buildComponent()
    const builtNotification = await notification.buildComponent()
    await this.page.appendChild(tab)
    await this.page.appendChild(builtNotification)
  }

  private addToApp() {
    const app = document.getElementById('app')!
    app.appendChild(this.page)
  }

  private removeLoader() {
    const loader = document.getElementById('loader')
    loader?.classList.add('hidden')
  }
}

export default Index
