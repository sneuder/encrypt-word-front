class Encrypt {
  //
  fromTextToASCIIArray(textToConvert: string): Number[] {
    return textToConvert
      .split('')
      .map((_character, index: number) => textToConvert.charCodeAt(index))
  }
}

const encrypt = new Encrypt()
