const formInstuctions = {
  encrypt: {
    titleSubmit: 'Encrypt',
    cryptService: 'encrypt',
    collectionData: 'encrypt',
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
    collectionData: 'decrypt',
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
    cryptService: 'decrypt',
  },
}

export default formInstuctions
