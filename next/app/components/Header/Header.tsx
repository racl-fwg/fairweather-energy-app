// app/components/Header/Header.tsx

'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">FAIRWEATHER Energy</Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className={styles.auth}>
          {session ? (
            <>
              <p className={styles.user}>Hello, {session.user?.name}!</p>
              {/* Dashboard button */}
              <Link href="/dashboard">
                <button className={styles.authButton}>Dashboard</button>
              </Link>
              {/* Sign Out button */}
              <button onClick={() => signOut()} className={styles.authButton}>
                Sign Out
              </button>
            </>
          ) : (
            <button onClick={() => signIn()} className={styles.authButton}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
