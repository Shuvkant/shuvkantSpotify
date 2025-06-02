import StreamView from '@/app/components/StreamView'

export default function CreatorIdPage({
  params,
}: {
  params: { creatorId: string }
}) {
  return (
    <div>
      <StreamView creatorId={params.creatorId} />
    </div>
  )
}
