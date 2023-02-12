import { AuthContextProvider } from '@/contexts/Auth/AuthContextProvider'

type ProviderWrapperProps = {
  children: React.ReactNode
}

export default function ProviderWrapper({ children }: ProviderWrapperProps) {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  )
}
