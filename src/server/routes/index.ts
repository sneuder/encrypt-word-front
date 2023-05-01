import { encryptController, decryptController } from '../controllers'
import { Router } from 'express'

function routes(router: Router) {
  router.post('/encrypt', encryptController)
  router.post('/decrypt', decryptController)
}

export default routes
