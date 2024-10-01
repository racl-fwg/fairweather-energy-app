// app/auth/signin/page.tsx

'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './SignIn.module.css'

export default function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    })

    if (res?.error) {
      setError('Invalid username or password')
    } else {
      router.push('/dashboard') // Redirect to dashboard after successful login
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>{/* Grid elements here */}</div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>Sign In</h1>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.submitButton}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
