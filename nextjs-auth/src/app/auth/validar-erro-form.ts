import * as Yup from 'yup'

async function validarErroForm<T>(data: T) {
  const schema = Yup.object().shape({
    email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: Yup.string().required('Este campo é obrigatório'),
  })

  await schema.validate(data, {
    abortEarly: false,
  })
}

export default validarErroForm
