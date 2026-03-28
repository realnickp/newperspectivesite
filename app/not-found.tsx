import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-serif text-6xl text-accent-primary mb-4">404</h1>
        <h2 className="font-serif text-2xl mb-4">Page Not Found</h2>
        <p className="text-text-secondary mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Link href="/" className="btn-primary">
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </section>
  )
}
