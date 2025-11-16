import { Toaster } from 'sonner'
import { AppRoutes } from './Routes/AppRoutes'

export function App() {
  return (
    <>
    <AppRoutes />
    <Toaster 
    duration={3000}
    richColors
    />
    </>
  )
}


