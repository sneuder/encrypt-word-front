class GlobalState {
  private currentTab = ''

  public setCurrentTab(tabToSet: string) {
    this.currentTab = tabToSet
  }
}

const globalState = new GlobalState()

export default globalState
