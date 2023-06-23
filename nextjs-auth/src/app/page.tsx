'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function Teste() {
  const router = useRouter()

  function handleLogout() {
    Cookies.remove('session_token')
    router.push('/auth')
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <span>Seja bem-vindo</span>
        <br />
        <div className="d-grid gap-2 mt-2">
          <button
            className="btn btn-danger btn-block fa-lg mb-3"
            type="button"
            onClick={handleLogout}
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  )
}
