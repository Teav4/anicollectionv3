'use client'

import { Button, useId } from '@fluentui/react-components'
import 'office-ui-fabric-react/dist/css/fabric.css';
import { signOut } from 'next-auth/react';

export default function Home() {

  return (
    <main className="container">
      <Button 
        appearance='primary' 
        onClick={() => signOut()}
      >
        Sign Out Of Google
      </Button>
    </main>
  );
}
