"use client"

import { useFormState, useFormStatus } from "react-dom"
import { submitContactForm, type ContactFormState } from "@/app/actions/contact"
import { useState, useEffect } from "react"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-blue-600 px-4 py-3 font-heading text-base text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-75"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  )
}

export function ContactForm() {
  // Initial state for the form
  const initialState: ContactFormState = {}

  // Form state using React's useFormState hook
  const [state, formAction] = useFormState(submitContactForm, initialState)

  // Local state to track if the form has been submitted successfully
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Reset form fields after successful submission
  useEffect(() => {
    if (state.success) {
      setIsSubmitted(true)
    }
  }, [state.success])

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-heading text-gray-900 mb-4">Contact Us</h3>
      <p className="text-gray-600 mb-6">
        Have questions about the festival? Send us a message and we'll get back to you soon.
      </p>

      {isSubmitted ? (
        <div className="bg-blue-50 border border-blue-200 text-blue-700 rounded-md p-4">
          <p className="font-medium">Thanks for your message!</p>
          <p className="text-sm">We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form action={formAction} className="space-y-4">
          {/* Display form-wide error message if any */}
          {state.message && !state.success && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-md p-4 mb-4">
              <p>{state.message}</p>
            </div>
          )}

          {/* Name field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`block w-full rounded-md border ${
                state.errors?.name ? "border-red-300" : "border-gray-300"
              } px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500`}
              placeholder="Your name"
            />
            {state.errors?.name && <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>}
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`block w-full rounded-md border ${
                state.errors?.email ? "border-red-300" : "border-gray-300"
              } px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500`}
              placeholder="your@email.com"
            />
            {state.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>}
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`block w-full rounded-md border ${
                state.errors?.message ? "border-red-300" : "border-gray-300"
              } px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500`}
              placeholder="Your message"
            ></textarea>
            {state.errors?.message && <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>}
          </div>

          {/* Honeypot field - hidden from real users, only bots will fill this */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="honeypot">Leave this field empty</label>
            <input type="text" id="honeypot" name="honeypot" tabIndex={-1} autoComplete="off" />
          </div>

          {/* Submit button */}
          <SubmitButton />

          <p className="text-xs text-gray-500">
            We respect your privacy and will only use your information to respond to your inquiry.
          </p>
        </form>
      )}
    </div>
  )
}
