'use client'
import Headeradmin from '@/components/common/layout/dashbord-admin/header-admin'
import Sidebaradmin from '@/components/common/layout/dashbord-admin/sidebar-admin'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useEffect, useState } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [data, setData] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem('token')

      if (!token) {
        setError('No token found')
        window.location.href = '/login'
        return
      }

      try {
        const response = await fetch('/api/auth/verify', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          setData(data)
          sessionStorage.setItem('user', data.user)

          setTimeout(() => {
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('user')
            window.location.href = '/login'
          }, 86400000)
        } else {
          setError('Access denied')
          sessionStorage.removeItem('token')
          sessionStorage.removeItem('user')
          window.location.href = '/login'
        }
      } catch (error) {
        setError('Access denied')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
        window.location.href = '/login'
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div>
        <div className="flex items-center justify-center min-h-screen">
          <span className="loader"></span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen flex-col">
        <span className="loader"></span>
        <p className=" text-2xl">{error}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap min-h-screen  pr-2 md:pr-8 bg-blue-0">
      <Sidebaradmin />
      <main className="flex-1 flex flex-col w-full">
        <Headeradmin />
        <div className="pl-0 md:pl-[310px] pt-10">{children}</div>
      </main>
    </div>
  )
}
