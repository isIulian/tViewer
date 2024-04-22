import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function RecentAdditions() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <div className='space-y-1'>
          <p className='text-sm font-medium leading-none'>Resource #1</p>
          <p className='text-sm text-muted-foreground'>
            Resopurce short description
          </p>
        </div>
        <div className='ml-auto font-medium'>New</div>
      </div>
      <div className='flex items-center'>
        <div className='space-y-1'>
          <p className='text-sm font-medium leading-none'>Resource #11</p>
          <p className='text-sm text-muted-foreground'>
            Resource short description
          </p>
        </div>
        <div className='ml-auto font-medium'>Update</div>
      </div>
      <div className='flex items-center'>
        <div className='space-y-1'>
          <p className='text-sm font-medium leading-none'>Resource #101</p>
          <p className='text-sm text-muted-foreground'>
            Resource short description
          </p>
        </div>
        <div className='ml-auto font-medium'>Delete</div>
      </div>

    </div>
  )
}
