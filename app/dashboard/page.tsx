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
import StreamView from '@/app/components/StreamView'

interface Video {
  id: string
  title: string
  thumbnail: string
  votes: number
  duration: string
  channel: string
  url: string
  isUpvote: boolean
  haveUpvoted: boolean
}
// const REFRESH_INTERVAL_MS = 10 * 1000

export default function MusicVotingApp() {
  return <StreamView creatorId={creatorId} />
}
