'use client'
import { Layout } from '@/common/components/Layout/Layout';
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
      <head />
      <body>
        <SSRProvider>
          <FluentProvider theme={teamsDarkTheme}>
            <ProviderWrapper>
              <Layout>
                {children}
              </Layout>
            </ProviderWrapper>
          </FluentProvider>
        </SSRProvider>
      </body>
    </html>
  )
}
