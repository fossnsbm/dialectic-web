'use client'

import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { useRouter } from 'next/navigation'
import Cards from '@/components/common/Episode_cardadmin'
import AlertDialogDemo from '@/components/common/alert-dialog-but'
import { Containerf } from '@/components/common'
const UserClient = () => {
  const router = useRouter()

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading title={`Total Episodes`} description={''} />

        <AlertDialogDemo />
      </div>
      <div className="pt-7">
        <Containerf>
          <Cards />
        </Containerf>
      </div>
    </>
  )
}

export default UserClient
