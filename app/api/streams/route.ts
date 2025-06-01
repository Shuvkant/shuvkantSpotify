import { prismaClient } from '@/app/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
//@ts-ignore
import { GetVideoDetails } from 'youtube-search-api'
import { YT_REGEX } from '@/app/lib/utils'

// var YT_REGEX =
//   /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com\/(?:watch\?(?!.*\blist=)(?:.*&)?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:[?&]\S+)?$/
// export const YT_REGEX = /https:\/\/youtu\.be\/([a-zA-Z0-9_-]{11})/

const CreateStreamSchema = z.object({
  creatorId: z.string(),
  url: z.string(),
})

export async function POST(req: NextRequest) {
  try {
    const data = CreateStreamSchema.parse(await req.json())
    const isYt = data.url.match(YT_REGEX)
    if (!isYt) {
      return NextResponse.json(
        {
          message: 'Wrong URL format',
        },
        {
          status: 411,
        }
      )
    }
    const extractedId = isYt[1]
    const res = await GetVideoDetails(extractedId)
    console.log(res)
    // console.log(res.thumbnail.thumbnails)
    const thumbnails = res.thumbnail.thumbnails
    thumbnails.sort((a: { width: number }, b: { width: number }) => {
      a.width < b.width ? -1 : 1
    })
    const user = await prismaClient.user.findUnique({
      where: { id: data.creatorId },
    })
    // To find the user before adding stream to the specified user
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 400 })
    }
    console.log(data.creatorId)
    const stream = await prismaClient.stream.create({
      data: {
        userId: data.creatorId,
        url: data.url,
        extractedId,
        type: 'Youtube',
        channel:res.channel,
        title: res.title ?? 'cant find video',
        smallImg:
          (thumbnails.length > 1
            ? thumbnails[thumbnails.length - 2].url
            : thumbnails[thumbnails.length - 1].url) ??
          'https://media.istockphoto.com/id/968853036/photo/top-view-of-a-young-green-forest-in-spring-or-summer.jpg?s=612x612&w=0&k=20&c=hcvwY9NfJI86bMAGtBaUrQLqc0OqkaXHLHf2ZiI4DRs=',
        bigImg:
          thumbnails[thumbnails.length - 1].url ??
          'https://media.istockphoto.com/id/1471370789/photo/a-beautiful-forest-in-spring.jpg?s=612x612&w=0&k=20&c=yjyc4EyVeNhNB_OcVFTWjbBrVd2EDQePnpKLn4CWIyM=',
      },
    })
    return NextResponse.json({
      ...stream,
      hasUpvoted: false,
      upvotes: 0,
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: 'Error while adding a stream',
      },
      {
        status: 411,
      }
    )
  }
}

export async function GET(req: NextRequest) {
  const creatorId = req.nextUrl.searchParams.get('creatorId')
  if(!creatorId){
    return NextResponse.json({
      message:"Error in creatorId"
    }, {
        status:411
      })
  }
  const streams=await prismaClient.stream.findMany({
    where:{
      userId:creatorId
    },include:{
      _count:{
        select:{
          upvotes:true
        }
      },
      upvotes:{
        where:{
          userId:user.id
        }
      }
    }
  });

  return NextResponse.json({
    streams: streams.map(({ _count, ...rest }) => ({
      ...rest,
      upvotes: _count.upvotes,
      haveUpvoted: rest.upvotes.length ? true : false
    }))
  });
}
