import { IsNotEmpty, Length } from 'class-validator'

export class AuthBodyCreate {
  @Length(0, 100)
  name: string

  @IsNotEmpty({
    message: 'E-mail é obrigatória',
  })
  @Length(0, 80)
  email: string

  @IsNotEmpty({
    message: 'Senha é obrigatória',
  })
  @Length(0, 120)
  password: string
}

export class AuthBodyLogin {
  @IsNotEmpty({
    message: 'E-mail é obrigatória',
  })
  @Length(0, 80)
  email: string

  @IsNotEmpty({
    message: 'Senha é obrigatória',
  })
  @Length(0, 120)
  password: string
}
