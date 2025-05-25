import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Play, Headphones, Users, Heart, Download, Star, Shuffle, Radio, Mic2, Volume2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-white/10 border-b border-white/20">
        <Link href="/" className="flex items-center justify-center">
          <Music className="h-8 w-8 text-white" />
          <span className="ml-2 text-xl font-bold text-white">SoundWave</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#download" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Download
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  🎵 Now Available on All Platforms
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Your Music, Your World
                </h1>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Discover millions of songs, create perfect playlists, and connect with artists you love. Experience
                  music like never before with SoundWave.
                </p>
              </div>
              <div className="space-x-4 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90">
                  <Download className="mr-2 h-4 w-4" />
                  Download Free
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Play className="mr-2 h-4 w-4" />
                  Listen Now
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-white/60 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>4.8/5 Rating</span>
                </div>
                <div>•</div>
                <div>10M+ Downloads</div>
                <div>•</div>
                <div>Free to Use</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-purple-200 text-purple-700">
                  Features
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Everything You Need for Music
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From streaming to discovery, we've got all the tools to enhance your musical journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Headphones className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">High-Quality Streaming</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Enjoy crystal-clear audio with lossless streaming up to 320kbps quality.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Heart className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Smart Recommendations</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Discover new music tailored to your taste with AI-powered suggestions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Social Playlists</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Create and share playlists with friends. Collaborate on the perfect mix.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Radio className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Live Radio</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Tune into live radio stations from around the world, 24/7.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-pink-100 rounded-lg">
                      <Mic2 className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Podcast Library</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Access millions of podcasts and audio shows in every category.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* App Showcase */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="border-purple-200 text-purple-700 w-fit">
                    Mobile Experience
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                    Music in Your Pocket
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Take your entire music library with you. Our mobile app delivers the same premium experience with
                    intuitive controls and seamless synchronization across all your devices.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download for iOS
                  </Button>
                  <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                    <Download className="mr-2 h-4 w-4" />
                    Download for Android
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  width="300"
                  height="600"
                  alt="SoundWave Mobile App"
                  className="mx-auto aspect-[1/2] overflow-hidden rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-purple-400">50M+</div>
                <div className="text-sm text-gray-300">Songs Available</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">10M+</div>
                <div className="text-sm text-gray-300">Active Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-green-400">180+</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-pink-400">24/7</div>
                <div className="text-sm text-gray-300">Music Streaming</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-purple-200 text-purple-700">
                  Pricing
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Choose Your Plan</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start free and upgrade when you're ready for premium features.
                </p>
              </div>
            </div>
            <div className="grid max-w-4xl mx-auto gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">Free</h3>
                      <p className="text-gray-600">Perfect for casual listeners</p>
                    </div>
                    <div className="text-4xl font-bold">
                      $0<span className="text-lg text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Volume2 className="h-4 w-4 text-green-500 mr-2" />
                        Limited skips
                      </li>
                      <li className="flex items-center">
                        <Shuffle className="h-4 w-4 text-green-500 mr-2" />
                        Shuffle play only
                      </li>
                      <li className="flex items-center">
                        <Radio className="h-4 w-4 text-green-500 mr-2" />
                        Ad-supported
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">
                      Get Started Free
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white">Most Popular</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">Premium</h3>
                      <p className="text-gray-600">Unlimited music experience</p>
                    </div>
                    <div className="text-4xl font-bold">
                      $9.99<span className="text-lg text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Volume2 className="h-4 w-4 text-green-500 mr-2" />
                        Unlimited skips
                      </li>
                      <li className="flex items-center">
                        <Download className="h-4 w-4 text-green-500 mr-2" />
                        Offline downloads
                      </li>
                      <li className="flex items-center">
                        <Headphones className="h-4 w-4 text-green-500 mr-2" />
                        High-quality audio
                      </li>
                      <li className="flex items-center">
                        <Heart className="h-4 w-4 text-green-500 mr-2" />
                        No ads
                      </li>
                    </ul>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Start Premium Trial</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Ready to Start Your Musical Journey?
                </h2>
                <p className="mx-auto max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join millions of music lovers worldwide. Download SoundWave today and discover your next favorite
                  song.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button type="submit" className="bg-white text-purple-600 hover:bg-white/90">
                    Get App Link
                  </Button>
                </form>
                <p className="text-xs text-white/60">We'll send you a download link. No spam, promise!</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-white">
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} SoundWave. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white">
            Support
          </Link>
        </nav>
      </footer>
    </div>
  )
}
