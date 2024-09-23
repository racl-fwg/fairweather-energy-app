// app/components/Footer/Footer.tsx

'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const { data: session } = useSession()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2024 MyWebsite. All rights reserved.</p>
        <nav>
          <ul className={styles.nav}>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            {/* Show Dashboard link if user is logged in */}
            {session && (
              <li><Link href="/dashboard">Dashboard</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
