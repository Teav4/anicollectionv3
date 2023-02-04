import { SessionProvider } from 'next-auth/react'

type ProviderWrapperProps = {
  children: React.ReactNode
}

export default function ProviderWrapper({ children }: ProviderWrapperProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
