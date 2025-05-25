import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Play, Headphones, Heart, Download } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-6 h-16 flex items-center border-b">
        <div className="flex items-center">
          <Music className="h-6 w-6 text-purple-600" />
          <span className="ml-2 text-xl font-bold">MusicApp</span>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 text-center bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Your Music, Everywhere</h1>
            <p className="text-xl text-gray-600 mb-8">
              Stream millions of songs, create playlists, and discover new music you'll love.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Download className="mr-2 h-4 w-4" />
                Download App
              </Button>
              <Button size="lg" variant="outline">
                <Play className="mr-2 h-4 w-4" />
                Listen Now
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose MusicApp?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Headphones className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">High Quality</h3>
                  <p className="text-gray-600">Crystal clear audio streaming up to 320kbps</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Personalized</h3>
                  <p className="text-gray-600">Smart recommendations based on your taste</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Download className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Offline Mode</h3>
                  <p className="text-gray-600">Download songs and listen anywhere</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-purple-600 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Start Listening Today</h2>
            <p className="text-xl mb-8 text-purple-100">
              Join millions of music lovers. Download for free and start your musical journey.
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Download className="mr-2 h-4 w-4" />
              Get Started Free
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 border-t text-center text-gray-600">
        <p>© 2024 MusicApp. All rights reserved.</p>
      </footer>
    </div>
  )
}
