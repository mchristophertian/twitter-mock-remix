import { BrandIcon } from '~/components/icons'
import { UserAvatar } from '~/components/ui/avatar'

export function TopBar() {
  return (
    <div className="h-[53px] px-4 grid grid-cols-[1fr,max-content,1fr] items-center">
      <UserAvatar />
      <BrandIcon />
    </div>
  )
}