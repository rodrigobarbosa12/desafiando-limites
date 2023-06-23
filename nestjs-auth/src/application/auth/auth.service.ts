import { Injectable, Inject } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm'
import { User } from 'src/infrastructure/typeorm/entity/User'
import {
  AuthBodyCreate,
  AuthBodyLogin,
} from 'src/infrastructure/dtos/auth-body'
import auth from 'src/infrastructure/security/auth-config'
import { createTokenJwt, ExceptionError } from 'src/infrastructure/utils'

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async getUserByEmail(email: string) {
    const firstUser = await this.userRepository
      .createQueryBuilder()
      .where('email = :email', { email })
      .getOne()

    return firstUser
  }

  async create(data: AuthBodyCreate) {
    const firstUser = await this.getUserByEmail(data.email)

    if (firstUser) {
      throw ExceptionError('Usuário já cadastrado', 401)
    }

    const hash = await bcrypt.hash(data.password, auth.saltRounds)

    if (!hash) {
      throw ExceptionError('Algo deu errado', 401)
    }

    const newUser = {
      ...data,
      password: hash,
    }

    await this.userRepository.save(newUser)
  }

  async login(data: AuthBodyLogin): Promise<{ token: string }> {
    const { email, password } = data

    const firstUser = await this.getUserByEmail(email)

    if (!firstUser) {
      throw ExceptionError('Email ou senha inválidos', 401)
    }

    const comparation = await bcrypt.compare(password, firstUser.password)

    if (!comparation) {
      throw ExceptionError('Email ou senha inválidos', 401)
    }

    const user = {
      id: firstUser.id,
      name: firstUser.name,
      email: firstUser.email,
    }

    return { token: createTokenJwt(user) }
  }
}
