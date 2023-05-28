class GlobalState {
  private tabs = {
    currentTab: '',
    previousTab: '',
  }

  public setCurrentTab(tabToSet: string) {
    this.tabs.previousTab = this.tabs.currentTab
    this.tabs.currentTab = tabToSet
  }

  public getCurrentTab() {
    return this.tabs.currentTab
  }

  public getPreviousTab() {
    return this.tabs.previousTab
  }
}

const globalState = new GlobalState()

export default globalState
