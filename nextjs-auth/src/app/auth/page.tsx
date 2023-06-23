'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import Cookies from 'js-cookie'
import { FormGroup, InputUnform, load } from '@/components'
import { exibirErrorCatch, api } from '@/utils'
import { ModalCreate } from './components/ModalCreate'
import validarErroForm from './validar-erro-form'

export default function Auth() {
  const router = useRouter()

  const formRef = useRef<FormHandles>(null)

  const [showModal, setShowModal] = useState(false)

  async function handleLogin<T>(dados: T) {
    try {
      load.show()

      formRef.current?.setErrors({})
      await validarErroForm(dados)

      const {
        data: { token },
      } = await api.login(dados)

      Cookies.set('session_token', token)

      router.push('/')
    } catch (error) {
      exibirErrorCatch(error, formRef)
    } finally {
      load.hide()
    }
  }

  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: '#eee' }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <Image
                        src="/images/logo.png"
                        width="350"
                        height="125"
                        alt="logo"
                      />
                      <h4 className="text-dark mt-1 mb-5">Login</h4>
                    </div>
                    <Form ref={formRef} onSubmit={handleLogin}>
                      <FormGroup className="form-outline mb-4">
                        <Col col={12}>
                          <InputUnform
                            key="email"
                            type="email"
                            name="email"
                            className="form-control form-control-user"
                            placeholder="E-mail"
                            maxLength={50}
                          />
                        </Col>
                      </FormGroup>

                      <FormGroup className="form-outline mb-4">
                        <Col col={12}>
                          <InputUnform
                            key="password"
                            type="password"
                            name="password"
                            className="form-control form-control-user"
                            placeholder="Senha"
                            maxLength={20}
                          />
                        </Col>
                      </FormGroup>
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                        >
                          Entrar
                        </button>
                        <br />
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-2">
                        <p className="text-secondary mb-0 me-2">
                          Não tem uma conta?
                        </p>
                      </div>

                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-block fa-lg mb-3"
                          style={{
                            backgroundColor: 'rgb(124, 103, 209)',
                            color: '#FFF',
                          }}
                          type="button"
                          onClick={() => setShowModal(true)}
                        >
                          Criar agora
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Desafiando Limites</h4>
                    <p className="small mb-0">
                      Este projeto apresenta um sistema de login desenvolvido em
                      um computador antigo, com o objetivo de mostrar que é
                      possível programar mesmo em dispositivos com recursos
                      limitados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <ModalCreate show={showModal} closeModal={() => setShowModal(false)} />
    </section>
  )
}
