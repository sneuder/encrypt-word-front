const formInstuctions = {
  encrypt: {
    titleSubmit: 'Encrypt',
    cryptService: 'encrypt',
    collectionData: 'encrypt',
    responseValue: 'encrypt',
    inputs: [
      {
        name: 'words',
        placeholder: 'Text to encrypt',
        type: 'textarea',
      },
      {
        name: 'keywords',
        placeholder: 'Keywords',
        type: 'input',
      },
    ],
  },
  decrypt: {
    titleSubmit: 'Decrypt',
    cryptService: 'decrypt',
    collectionData: 'decrypt',
    responseValue: 'decrypt',
    inputs: [
      {
        name: 'encrypted',
        placeholder: 'Text to decrypt',
        type: 'textarea',
      },
      {
        name: 'keywords',
        placeholder: 'Keywords',
        type: 'input',
      },
    ],
  },
}

export default formInstuctions
