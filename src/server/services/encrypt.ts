interface ArrayToProcess {
  key: 'arrayASCIIWords' | 'arrayASCIIKeyWord'
  value: string
}

class Encrypt {
  // private encryptedWord: string = ''

  private arrayASCIIWords: number[] = []
  private arrayASCIIKeyWord: number[] = []
  // private arrayASCIIPosition: number[] = []

  // private stringASCIIWords: string = ''
  // private stringASCIIKeyWord: string = ''
  // private stringASCIIPosition: string = ''

  process(textToConvert: string, keyWords: string) {
    const arraysToProcess: ArrayToProcess[] = [
      { key: 'arrayASCIIWords', value: textToConvert },
      { key: 'arrayASCIIKeyWord', value: keyWords },
    ]

    // same process both words and keyword
    arraysToProcess.forEach((itemToProcess) => {
      const textASCIIArray = this.fromTextToASCIIArray(itemToProcess.value)
      this[itemToProcess.key] = this.reorderArrayOfASCII(textASCIIArray)
      this[itemToProcess.key] = this.splitArrayOfASCII(this[itemToProcess.key])
    })

    // reorder keyword again
    this.arrayASCIIKeyWord = this.reorderArrayOfASCII(this.arrayASCIIKeyWord)
    this.arrayASCIIKeyWord = this.splitArrayOfASCII(this.arrayASCIIKeyWord)

    // multiply words and keyword parts
    this.multiWordsWithKW()

    return this.arrayASCIIWords
  }

  private fromTextToASCIIArray(textToConvert: string) {
    return textToConvert
      .split('')
      .map((_character, index) => textToConvert.charCodeAt(index))
  }

  private reorderArrayOfASCII(arrayASCII: number[]) {
    let tempItem: number | null = null

    return arrayASCII.map((itemASCII, index) => {
      const pointer = index + 1
      if (pointer % 2 === 0) return tempItem

      tempItem = itemASCII
      return arrayASCII[pointer]
    }) as number[]
  }

  private splitArrayOfASCII(arrayASCII: number[]) {
    const middle = Math.ceil(arrayASCII.length / 2)
    return [
      ...arrayASCII.slice(middle, arrayASCII.length + 1),
      ...arrayASCII.slice(0, middle),
    ]
  }

  private multiWordsWithKW() {
    // less
    // this.arrayASCIIWords = this.arrayASCIIWords.map((itemASCII, index) => {
    //   if (this.arrayASCIIKeyWord.length - 1 === index) {
    //     const partialArray = this.arrayASCIIKeyWord.slice(
    //       index,
    //       this.arrayASCIIKeyWord.length + 1
    //     )
    //     partialArray.forEach((itemPartial) => (itemASCII *= itemPartial))
    //     return itemASCII
    //   }
    //   return itemASCII * this.arrayASCIIKeyWord[index]
    // })
    // equal
    // this.arrayASCIIWords = this.arrayASCIIWords.map((itemASCII, index) => {
    //   return itemASCII * this.arrayASCIIKeyWord[index]
    // })
  }
}

const encrypt = new Encrypt()
export default encrypt
