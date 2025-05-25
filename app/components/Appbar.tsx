'use client'
import { signIn, useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export function Appbar() {
  const session = useSession()
  return (
    <div>
      <div className='flex justify-center px-20 mt-10'>
        {/* <div className="text-lg font-bold flex flex-col justify-center text-white">Muzik</div> */}
        <div className='ml-auto'>
          {session.data?.user && (
            <Button
              className='bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-fuchsia-500/25'
              onClick={() => signOut()}
            >
              Log out
            </Button>
          )}
          {!session.data?.user && (
            <Button
              className='bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-fuchsia-500/25'
              onClick={() => signIn()}
            >
              SignIn
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
