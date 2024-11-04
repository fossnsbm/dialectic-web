'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function UserNav() {
  return (
    <div className="flex gap-5">
      <p>Hello! Admin </p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative rounded-full w-8 h-8">
            <Avatar>
              <AvatarImage src="/images/fosslogo.svg" alt="User Avatar" />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuItem
            onClick={() => {
              sessionStorage.removeItem('user')
              sessionStorage.removeItem('role')
              localStorage.removeItem('token')
              sessionStorage.removeItem('token')
              window.location.href = '/'
            }}
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
