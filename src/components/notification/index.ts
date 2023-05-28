import axios from 'axios'
import parserHTML from '../../services/parserHTML.service'

class Notification {
  private notification: any

  constructor() {}

  public async buildComponent() {
    this.notification = (
      await axios.get('/src/components/notification/index.html')
    ).data

    this.notification = parserHTML.parse(
      'notificationContainer',
      this.notification
    )

    return this.notification
  }

  public showUpAlert(alertType: string) {
    const alert = this.notification.querySelector(`[role=${alertType}]`)
    alert.classList.remove('hidden')
    this.removeAlertAfter(alert)
  }

  private removeAlertAfter(element: HTMLDivElement) {
    setTimeout(() => {
      element.classList.add('hidden')
    }, 4000)
  }
}

export const notification = new Notification()
