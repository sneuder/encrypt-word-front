export interface DataToEncrypt {
  words: string
  keywords: string
}

export interface DataToDecrypt {
  encrypted: string
  keywords: string
}

export interface DataResponseEncrypt {
  encrypt: string
}

export interface DataResponseDecrypt {
  decrypt: string
}

export interface FormCollection {
  encrypt: DataToEncrypt
  decrypt: DataToDecrypt
}
