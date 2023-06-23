import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import '@/css/auth.css'
import { ReactNode } from 'react'
import { Loading } from '@/components'

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        {children}
        <Loading />
      </body>
    </html>
  )
}
