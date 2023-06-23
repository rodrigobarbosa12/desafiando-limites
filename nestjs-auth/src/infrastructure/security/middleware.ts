import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import authConfig from 'src/infrastructure/security/auth-config'

interface Decoded {
  id: number
  email: string
}

const freeAccess = (originalUrl: string, method: string) => {
  switch (originalUrl) {
    case '/auth/login':
      return true

    case '/auth/signup':
      return true

    default:
      return false
  }
}

const middleware = (req: Request, res: Response, next: NextFunction): void => {
  if (freeAccess(req.path, req.method)) {
    next()
    return
  }

  const authHeader = req.headers.authorization

  if (!authHeader) {
    res.status(401).send({ message: 'Você não está autorizado' })
    return
  }

  // Bearer lkasdjfksdfaDJKÇLÇLKASDA
  const parts = authHeader.split(' ')

  if (parts.length !== 2) {
    res.status(401).send({ message: 'Token error' })
    return
  }

  const [schema, token] = parts

  // Verifica se Schema tem a palavra Bearer
  if (!/^Bearer$/i.test(schema)) {
    res.status(401).send({ message: 'Token mal formado' })
    return
  }

  // verifica token
  jwt.verify(
    token,
    authConfig.secret,
    (err: jwt.VerifyErrors | null, decoded: Decoded): void => {
      if (err) {
        res.status(401).send({ message: 'Token invalido' })
        return
      }

      req.session = {
        userId: decoded.id,
        email: decoded.email,
      }

      next()
    },
  )
}

export default middleware
