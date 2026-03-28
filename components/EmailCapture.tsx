'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, CheckCircle } from 'lucide-react'

export default function EmailCapture() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>()

  const onSubmit = async () => {
    // TODO: Connect to email service (Mailchimp, ConvertKit, etc.)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-3 text-accent-primary">
        <CheckCircle className="w-5 h-5" />
        <span className="font-medium">Check your inbox for the free chapter!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <div className="flex-1">
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
          })}
          placeholder="Enter your email"
          className="w-full bg-white border border-border-light rounded-lg px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-colors"
        />
        {errors.email && (
          <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>
      <button type="submit" className="btn-primary whitespace-nowrap">
        <Mail className="w-4 h-4" />
        Get Free Chapter
      </button>
    </form>
  )
}
