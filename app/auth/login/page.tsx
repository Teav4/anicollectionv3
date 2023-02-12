'use client'

import { Card, CardFooter, CardPreview } from '@fluentui/react-components/unstable';
import { Button, Input, Label, Text, useId } from '@fluentui/react-components'
import classes from './login.module.scss'
import { useRouter } from 'next/navigation'
import { onGoogleSignIn } from './onGoogleSignIn';
import { useEffect, useState } from 'react';

export default function LoginPage() {
  const inputUsernameId = useId('input-username');
  const inputPasswordId = useId('input-password');
  const [googleLoginUrl, setGoogleLoginUrl] = useState('')
  const router = useRouter()

  useEffect(() => {
    onGoogleSignIn()
      .then(setGoogleLoginUrl)
  }, [])

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
              >
                <a href={googleLoginUrl}>Sign In With Google</a>
              </Button>
            </CardFooter>
          </CardPreview>
        </Card>
      </div>
    </main>
  )
}
