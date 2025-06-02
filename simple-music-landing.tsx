import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Music, Play, Headphones, Heart, Download } from 'lucide-react'
import { Appbar } from './app/components/Appbar'
import { Navbar } from './app/components/Navbar'

export default function Component() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-900 text-neutral-100'>
      {/* Header */}
      {/* <Navbar /> */}
      <Appbar />
      <header className='px-6 h-16 flex items-center border-b border-slate-800/50 backdrop-blur-sm'>
        <div className='flex items-center'>
          <Music className='h-6 w-6 text-fuchsia-400' />
          <span className='ml-2 text-xl font-bold bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent'>
            MusicApp
          </span>
        </div>
      </header>

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='py-20 px-6 text-center bg-gradient-to-br from-indigo-950 via-fuchsia-900 to-slate-900 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-fuchsia-600/10 via-pink-600/10 to-violet-600/10' />
          <div className='max-w-3xl mx-auto relative z-10'>
            <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-300 via-pink-400 to-violet-300 bg-clip-text text-transparent mb-6'>
              Your Music, Everywhere
            </h1>
            <p className='text-xl text-slate-300 mb-8'>
              Stream millions of songs, create playlists, and discover new music
              you'll love.
            </p>
            <div className='flex gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-fuchsia-500/25'
              >
                <Download className='mr-2 h-4 w-4' />
                Download App
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-slate-600/50 text-slate-300 bg-slate-700/60 text-white backdrop-blur-sm'
              >
                <Play className='mr-2 h-4 w-4' />
                Listen Now
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-16 px-6 bg-slate-900'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-12 bg-gradient-to-r from-fuchsia-300 to-violet-300 bg-clip-text text-transparent'>
              Why Choose MusicApp?
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <Card className='bg-gradient-to-br from-slate-800/60 to-fuchsia-900/30 border-slate-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-fuchsia-500/10 transition-all duration-300'>
                <CardContent className='p-6 text-center'>
                  <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-fuchsia-500 to-violet-500 rounded-full flex items-center justify-center'>
                    <Headphones className='h-8 w-8 text-white' />
                  </div>
                  <h3 className='text-xl font-semibold mb-2 text-white'>
                    High Quality
                  </h3>
                  <p className='text-slate-400'>
                    Crystal clear audio streaming up to 320kbps
                  </p>
                </CardContent>
              </Card>

              <Card className='bg-gradient-to-br from-slate-800/60 to-rose-900/30 border-slate-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300'>
                <CardContent className='p-6 text-center'>
                  <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center'>
                    <Heart className='h-8 w-8 text-white' />
                  </div>
                  <h3 className='text-xl font-semibold mb-2 text-white'>
                    Personalized
                  </h3>
                  <p className='text-slate-400'>
                    Smart recommendations based on your taste
                  </p>
                </CardContent>
              </Card>

              <Card className='bg-gradient-to-br from-slate-800/60 to-violet-900/30 border-slate-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300'>
                <CardContent className='p-6 text-center'>
                  <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center'>
                    <Download className='h-8 w-8 text-white' />
                  </div>
                  <h3 className='text-xl font-semibold mb-2 text-white'>
                    Offline Mode
                  </h3>
                  <p className='text-slate-400'>
                    Download songs and listen anywhere
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 px-6 bg-gradient-to-br from-violet-900 via-pink-900 to-violet-900 text-white text-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-violet-600/20 to-pink-600/20' />
          <div className='max-w-2xl mx-auto relative z-10'>
            <h2 className='text-3xl font-bold mb-4'>Start Listening Today</h2>
            <p className='text-xl mb-8 text-pink-100'>
              Join millions of music lovers. Download for free and start your
              musical journey.
            </p>
            <Button
              size='lg'
              className='bg-gradient-to-r from-pink-100 to-violet-100 text-violet-900 hover:from-pink-200 hover:to-violet-200 shadow-lg shadow-fuchsia-500/25'
            >
              <Download className='mr-2 h-4 w-4' />
              Get Started Free
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='py-6 px-6 border-t border-slate-800/50 text-center text-slate-400 bg-slate-900'>
        <p>© 2024 MusicApp. All rights reserved.</p>
      </footer>
    </div>
  )
}
