// app/dashboard/DashboardLayout.tsx

'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import AdminDashboard from './components/AdminDashboard'
import InstallerDashboard from './components/InstallerDashboard'
import ClientDashboard from './components/ClientDashboard'

export default function DashboardLayout() {
  const { data: session, status } = useSession()
  const router = useRouter()

  // Redirect to sign-in page if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  // Choose the correct dashboard based on user role
  if (session?.user?.role === 'admin') {
    return <AdminDashboard />
  } else if (session?.user?.role === 'installer') {
    return <InstallerDashboard />
  } else if (session?.user?.role === 'client') {
    return <ClientDashboard />
  } else {
    return <p>No access</p>
  }
}
