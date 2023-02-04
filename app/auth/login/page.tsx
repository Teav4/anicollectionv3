'use client'

import { Card, CardFooter, CardPreview } from '@fluentui/react-components/unstable';
import { Button, Input, Label, Text, useId } from '@fluentui/react-components'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import classes from './login.module.scss'

export default function LoginPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const inputUsernameId = useId('input-username');
  const inputPasswordId = useId('input-password');

  if (session) {
    router.replace('/')

    return (
      <>
      </>
    )
  }

  return (
    <main className="container">
      <div className={classes.loginForm}>
        <Card className={classes.card}>
          <Text className={classes.title} size={700}>Login</Text>
          <CardPreview>
            <Label 
              htmlFor={inputUsernameId} 
              size='large'
            >
              Username:
            </Label>
            <Input type='text' className={classes.inputField} id={inputUsernameId}/>

            <Label 
              htmlFor={inputPasswordId}
              size='large'
            >
              Password:
            </Label>
            <Input type='password' className={classes.inputField} id={inputPasswordId}/>

            <CardFooter>
              <Button
                className={classes.submitBtn}
                appearance='primary'
              >
                  Submit
              </Button>
              <Button 
                appearance='primary'
                onClick={() => signIn('google')}
              >
                Sign In WIth Google
              </Button>
            </CardFooter>
          </CardPreview>
        </Card>
      </div>
    </main>
  )
}
