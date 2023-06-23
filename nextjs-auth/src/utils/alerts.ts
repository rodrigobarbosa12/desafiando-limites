import { ReactText, RefObject } from 'react'
import { toast, ToastOptions } from 'react-toastify'
import get from 'lodash/get'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { ValidationError } from 'yup'

type ErrorCatch = { [x: string]: any }

interface Erros {
  [key: string]: string
}

function validateUnform(err: ValidationError): Erros {
  const validacaoDeErros: Erros = {}

  err.inner.forEach((error) => {
    if (error.path) {
      validacaoDeErros[error.path] = error.message
    }
  })

  return validacaoDeErros
}

export function exibirToastSuccess(
  mensagem: string,
  config?: ToastOptions,
): ReactText {
  return toast.success(mensagem, config)
}

export function exibirToastWarn(
  mensagem: string,
  config?: ToastOptions,
): ReactText {
  return toast.warn(mensagem, config)
}

export function exibirErrorCatch(
  e: unknown,
  formRef?: RefObject<FormHandles>,
): void {
  if (formRef && e instanceof Yup.ValidationError) {
    const erros = validateUnform(e)
    formRef.current?.setErrors(erros)
    return
  }

  const err = e as ErrorCatch
  const message = 'Algo deu errado, tente novamente mais tarde'

  if (err?.response?.data?.message) {
    toast.error(get(err, 'response.data.message', message))

    return
  }

  if (err?.message) {
    toast.error(get(err, 'message', message))

    return
  }

  toast.error(get(err, 'response.data.message', message))
}
