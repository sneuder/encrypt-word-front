import { Request, Response } from 'express'
import encrypt from '../services/encrypt'

export function encryptController(req: Request, res: Response) {
  const { words, keyword } = req.body
  res.json(encrypt.process(words, keyword))
}

export function decryptController(_req: Request, _res: Response) {}
