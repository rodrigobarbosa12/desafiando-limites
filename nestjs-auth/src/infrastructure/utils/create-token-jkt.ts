import * as jwt from 'jsonwebtoken'
import authConfig from 'src/infrastructure/security/auth-config'

const createTokenJwt = (params: string | object): string =>
  jwt.sign(params, authConfig.secret, {
    expiresIn: authConfig.expiresIn,
  })

export default createTokenJwt
