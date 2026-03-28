'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  inquiryType: string
  message: string
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // TODO: Connect to form submission service (e.g., Formspree, EmailJS, or custom API route)
    console.log('Form submission:', data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-bg-elevated border border-border-light rounded-xl p-12 text-center">
        <CheckCircle className="w-16 h-16 text-accent-primary mx-auto mb-4" />
        <h3 className="font-serif text-2xl text-text-primary mb-2">
          Thank You!
        </h3>
        <p className="text-text-secondary">
          Daniel will be in touch within 24 hours. If your matter is urgent,
          please call{' '}
          <a href="tel:9086928754" className="text-accent-primary hover:underline">
            908-692-8754
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-bg-elevated border border-border-light rounded-xl p-8 space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full bg-white border border-border-light rounded-lg px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-colors"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email',
              },
            })}
            className="w-full bg-white border border-border-light rounded-lg px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-colors"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="w-full bg-white border border-border-light rounded-lg px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-colors"
            placeholder="(optional)"
          />
        </div>
        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-text-primary mb-2">
            How Can Daniel Help? *
          </label>
          <select
            id="inquiryType"
            {...register('inquiryType', { required: 'Please select an option' })}
            className="w-full bg-white border border-border-light rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-colors"
          >
            <option value="">Select one...</option>
            <option value="intervention">Intervention</option>
            <option value="family-support">Family Support</option>
            <option value="speaking">Speaking Inquiry</option>
            <option value="coaching">One-on-One Coaching</option>
            <option value="other">Other</option>
          </select>
          {errors.inquiryType && (
            <p className="text-red-600 text-xs mt-1">{errors.inquiryType.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
          Your Message *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: 'Please include a message' })}
          className="w-full bg-white border border-border-light rounded-lg px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-colors resize-none"
          placeholder="Tell Daniel what you're going through or what you need help with..."
        />
        {errors.message && (
          <p className="text-red-600 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
