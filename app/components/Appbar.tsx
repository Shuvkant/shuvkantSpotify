'use client'
import { signIn, useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export function Appbar() {
  const session = useSession()
  return (
    <div>
      <div className='flex justify-between'>
        <div>Muzi</div>
        <div>
          {session.data?.user && (
            <Button className='m-2 p-2 bg-blue-400' onClick={() => signOut()}>
              Log out
            </Button>
          )}
          {!session.data?.user && (
            <Button className='m-2 p-2 bg-blue-400' onClick={() => signIn()}>
              SignIn
            </Button>
          )}
        </div>
        <Button>Click me</Button>
      </div>
    </div>
  )
}
