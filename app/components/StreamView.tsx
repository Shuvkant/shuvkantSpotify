
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import axios from 'axios'
import { Appbar } from './../components/Appbar.tsx'
import {
  ChevronUp,
  ChevronDown,
  Play,
  Plus,
  ExternalLink,
  Share2,
  Check,
} from 'lucide-react'

interface Video {
  id: string
  title: string
  thumbnail: string
  votes: number
  duration: string
  channel: string
  url: string
  isUpvote:boolean
  haveUpvoted: boolean
}
const REFRESH_INTERVAL_MS = 10 * 1000

export default function StreamView({
  creatorId
}:{
    creatorId:string
  }) {
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [previewVideo, setPreviewVideo] = useState<Video | null>(null)
  const [copied, setCopied] = useState(false)
  const [loading, setLoading]=useState(false)

  const [currentlyPlaying, setCurrentlyPlaying] = useState<Video>({
    // id: 'dQw4w9WgXcQ',
    // title: 'Rick Astley - Never Gonna Give You Up',
    // thumbnail: '/placeholder.svg?height=180&width=320',
    // votes: 0,
    // duration: '3:33',
    // channel: 'Rick Astley',
    // url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  })

  async function refreshStreams() {
    const res = await axios.get(`/api/streams/?creatorId=${creatorId}`,{
      credentials:"include"
    });
    const json=await res.json();
    setQueue(json.streams)
    console.log(res)
  }

  useEffect(() => {
    refreshStreams()
    const interval = setInterval(() => {}, REFRESH_INTERVAL_MS)
  }, [])

  const [queue, setQueue] = useState<Video[]>([
    {
      id: 'CevxZvSJLk8',
      title: 'Katy Perry - Roar',
      thumbnail: '/placeholder.svg?height=180&width=320',
      votes: 5,
      duration: '3:43',
      channel: 'Katy Perry',
      url: 'https://www.youtube.com/watch?v=CevxZvSJLk8',
      haveUpvoted: false,
    },
  ])

  const extractVideoId = (url: string) => {
    const regex =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  const handlePreview = async () => {
    const videoId = extractVideoId(youtubeUrl)
    if (videoId) {
      // In a real app, you'd fetch video details from YouTube API
      const mockVideo: Video = {
        id: videoId,
        title: 'Sample Video Title',
        thumbnail: `/placeholder.svg?height=180&width=320`,
        votes: 0,
        duration: '3:45',
        channel: 'Sample Channel',
        url: youtubeUrl,
      }
      setPreviewVideo(mockVideo)
    }
  }

  const handleAddToQueue = async (e) => {
    // if (previewVideo) {
    //   setQueue((prev) => [...prev, previewVideo])
    //   setPreviewVideo(null)
    //   setYoutubeUrl('')
    // }
    e.preventDefault();
    setLoading(true)
    const res=await fetch("/api/streams/",{
      method:"POST",
      body:JSON.stringify({
        creatorId:"d3d6c33e-366d-4357-989b-dc6fc10b8b3b",
        url:youtubeUrl
      })
    });
    setQueue([...queue, await res.json()])
    setYoutubeUrl('')
    setLoading(false)

  }

  const handleVote = (videoId: string, isUpvote: boolean) => {
    setQueue((prev) =>
      prev
        .map((video) =>
          video.id === videoId
            ? {
                ...video,
                votes: isUpvote ? video.upvotes + 1 : video.upvotes - 1,
                haveUpvoted: !video.haveUpvoted,
              }
            : video
        )
        .sort((a, b) => b.votes - a.votes)
    )
    fetch(`api/streams/${isUpvote ? 'upvote' : 'downvote'}`, {
      method: 'POST',
      body: JSON.stringify({
        streamId: videoId,
      }),
    })
  }

  const handlePlayNext = (video: Video) => {
    setCurrentlyPlaying(video)
    setQueue((prev) => prev.filter((v) => v.id !== video.id))
  }

  const handleShare = async () => {
    const shareUrl =`${window.location.hostname}/creatorId/${creatorId}`
    const shareText =
      '🎵 Vote for the next song on my stream! Help me choose what to play next.'

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Stream Vote - Music Voting',
          text: shareText,
          url: shareUrl,
        })
        console.log('Shared successfully!')
      } catch (error) {
        // User cancelled sharing or error occurred
        handleCopyLink()
      }
    } else {
      handleCopyLink()
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      console.log('Link copied to clipboard!')
      setTimeout(() => setCopied(false), 1000)
    } catch (error) {
      console.error('Failed to copy link')
    }
  }

  return (
    <div className='min-h-screen bg-background p-4 dark'>
      <div className='max-w-6xl mx-auto space-y-4'>
        {/* Header */}
        <div className='text-center space-y-2'>
          <div className='flex items-center justify-center gap-4'>
            <h1 className='text-4xl font-bold text-foreground'>
              🎵 Stream Vote
            </h1>
            <Button
              onClick={handleShare}
              variant='outline'
              size='sm'
              className='gap-2 text-foreground'
            >
              {copied ? (
                <Check className='w-4 h-4' />
              ) : (
                <Share2 className='w-4 h-4' />
              )}
              {copied ? 'Copied!' : 'Share'}
            </Button>
          </div>
          <p className='text-muted-foreground'>
            Vote for the next song to be played on the stream!
          </p>
        </div>

        {/* Add Song Section */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Plus className='w-5 h-5' />
              Add a Song to Queue
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex gap-2'>
              <Input
                placeholder='Paste YouTube video URL here...'
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                className='flex-1'
              />
              <Button onClick={handlePreview} variant='outline'>
                Preview
              </Button>
            </div>

            {previewVideo && !loading && (
              <Card className='border-dashed'>
                <CardContent className='p-4'>
                  <div className='flex gap-4'>
                    <img
                      src={previewVideo.thumbnail || '/placeholder.svg'}
                      alt={previewVideo.title}
                      className='w-32 h-20 object-cover rounded'
                    />
                    <div className='flex-1 space-y-2'>
                      <h3 className='font-semibold'>{previewVideo.title}</h3>
                      <p className='text-sm text-muted-foreground'>
                        {previewVideo.channel}
                      </p>
                      <Badge variant='secondary'>{previewVideo.duration}</Badge>
                    </div>
                    <Button disabled={loading} onClick={handleAddToQueue} className='self-start'>
                      {loading ?"Loading":"Add to Queue"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>

        <div className='grid lg:grid-cols-2 gap-6'>
          {/* Currently Playing Section */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Play className='w-5 h-5' />
                Now Playing
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-3'>
              <div className='aspect-video bg-black rounded-md overflow-hidden'>
                <iframe
                  width='100%'
                  height='100%'
                  src={`https://www.youtube.com/embed/${currentlyPlaying.id}?autoplay=1`}
                  title={currentlyPlaying.title}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>

              <div className='space-y-2'>
                <h3 className='font-medium text-base leading-tight'>
                  {currentlyPlaying.title}
                </h3>
                <p className='text-sm text-muted-foreground'>
                  {currentlyPlaying.channel}
                </p>
                <div className='flex items-center justify-between'>
                  <Badge variant='secondary' className='text-xs'>
                    {currentlyPlaying.duration}
                  </Badge>
                  <div className='flex gap-2'>
                    <Button
                      onClick={() =>
                        queue.length > 0 && handlePlayNext(queue[0])
                      }
                      disabled={queue.length === 0}
                      size='sm'
                      className='h-8'
                    >
                      <Play className='w-3 h-3 mr-1' />
                      Play Next
                    </Button>
                    <Button variant='outline' size='sm' className='h-8' asChild>
                      <a
                        href={currentlyPlaying.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ExternalLink className='w-3 h-3 mr-1' />
                        YouTube
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Queue Section */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center justify-between'>
                <span>🗳️ Voting Queue</span>
                <Badge variant='outline'>{queue.length} songs</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className='p-3'>
              <div className='space-y-2'>
                {queue.map((video, index) => (
                  <div
                    key={video.id}
                    className='flex items-center gap-3 p-2 border rounded-md hover:bg-muted/50 transition-colors'
                  >
                    <div className='flex flex-col items-center gap-0.5'>
                      <Button
                        size='sm'
                        variant='ghost'
                        onClick={() =>
                          handleVote(video.id, video.haveUpvoted ? false : true)
                        }
                        className='h-5 w-5 p-0 hover:bg-green-100'
                      >
                        {video.haveUpvoted ? (
                          <ChevronDown className='w-3 h-3 text-red-600' />
                        ) : (
                          <ChevronUp className='w-3 h-3 text-green-600' />
                        )}
                      </Button>
                      <span className='font-bold text-xs min-w-[1.5rem] text-center'>
                        {video.votes}
                      </span>
                      {/* <Button */}
                      {/*   size='sm' */}
                      {/*   variant='ghost' */}
                      {/*   onClick={() => handleVote(video.id, -1)} */}
                      {/*   className='h-5 w-5 p-0 hover:bg-red-100' */}
                      {/* > */}
                      {/* <ChevronDown className='w-3 h-3 text-red-600' /> */}
                      {/* </Button> */}
                    </div>

                    <img
                      src={video.thumbnail || '/placeholder.svg'}
                      alt={video.title}
                      className='w-12 h-8 object-cover rounded'
                    />

                    <div className='flex-1 min-w-0'>
                      <h4 className='font-medium text-xs truncate leading-tight'>
                        {video.title}
                      </h4>
                      <p className='text-xs text-muted-foreground truncate'>
                        {video.channel}
                      </p>
                      <div className='flex items-center gap-2 mt-0.5'>
                        <Badge
                          variant='secondary'
                          className='text-xs px-1 py-0 h-4'
                        >
                          {video.duration}
                        </Badge>
                        <span className='text-xs text-muted-foreground'>
                          #{index + 1}
                        </span>
                      </div>
                    </div>

                    <Button
                      size='sm'
                      onClick={() => handlePlayNext(video)}
                      className='shrink-0 h-6 w-6 p-0'
                    >
                      <Play className='w-3 h-3' />
                    </Button>
                  </div>
                ))}

                {queue.length === 0 && (
                  <div className='text-center py-6 text-muted-foreground'>
                    <p className='text-sm'>No songs in queue</p>
                    <p className='text-xs'>
                      Add a YouTube video to get started!
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
