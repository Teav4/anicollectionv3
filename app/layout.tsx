'use client'
import { FluentProvider, teamsDarkTheme, SSRProvider } from '@fluentui/react-components';
import './globals.css'
import ProviderWrapper from './ProviderWrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SSRProvider>
          <FluentProvider theme={teamsDarkTheme}>
            <ProviderWrapper>
              {children}
            </ProviderWrapper>
          </FluentProvider>
        </SSRProvider>
      </body>
    </html>
  )
}
