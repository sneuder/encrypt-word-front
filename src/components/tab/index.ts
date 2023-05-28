import axios from 'axios'

import parserHTML from '../../services/parserHTML.service'
import globalState from '../../services/globalState.service'

import tabInstructions from '../../instructions/tab.instructions'
import Form from '../form'

class Tab {
  private tab: any

  constructor() {}

  public async buildComponent() {
    this.tab = await axios.get('/src/components/tab/index.html')
    this.tab = parserHTML.parse('tabContainer', this.tab.data)

    const liBaseElement = this.tab.querySelector('li')
    const sectionBaseElement = this.tab.querySelector('section')

    for (const tabIntruction of Object.values(tabInstructions)) {
      const liElement = liBaseElement.cloneNode(true)
      const buttonElement = liElement.querySelector('button')

      buttonElement.value = tabIntruction.value
      buttonElement.textContent = tabIntruction.titleTab
      this.addEvent(buttonElement, tabIntruction.formType)

      this.tab.querySelector('ul').appendChild(liElement)

      tabIntruction.form = await new Form(
        tabIntruction.formType
      ).buildComponent()

      const sectionElement = sectionBaseElement.cloneNode(true)
      sectionElement.id = tabIntruction.formType
      sectionElement.appendChild(tabIntruction.form)

      this.tab.querySelector('div').appendChild(sectionElement)
    }

    liBaseElement.remove()
    sectionBaseElement.remove()

    this.setDefaultTab(Object.values(tabInstructions)[0].formType)
    return this.tab
  }

  private addEvent(buttonElement: HTMLButtonElement, currentTab: string) {
    buttonElement.addEventListener('click', () => {
      globalState.setCurrentTab(currentTab)
      this.toggleTabs()
    })
  }

  private toggleTabs() {
    if (globalState.getPreviousTab()) {
      const previousTab = this.tab.querySelector(
        `#${globalState.getPreviousTab()}`
      )
      previousTab.classList.add('hidden')

      const currentButton = this.tab.querySelector(
        `[value=${globalState.getPreviousTab()}]`
      )
      currentButton.classList.add('text-indigo-500')
      currentButton.classList.add('bg-white')
      currentButton.classList.remove('text-white')
    }

    const currentTab = this.tab.querySelector(`#${globalState.getCurrentTab()}`)
    currentTab.classList.remove('hidden')

    const currentButton = this.tab.querySelector(
      `[value=${globalState.getCurrentTab()}]`
    )
    currentButton.classList.remove('text-indigo-500')
    currentButton.classList.remove('bg-white')
    currentButton.classList.add('text-white')
  }

  private setDefaultTab(defaultTab: string) {
    globalState.setCurrentTab(defaultTab)
    this.toggleTabs()
  }
}

export default Tab
