"use client"

import { useFormState } from "react-dom"
import { useFormStatus } from "react-dom"
import { submitContactForm } from "@/app/actions/contact"

interface ContactFormState {
  message?: string
  success?: boolean
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex text-lg h-14 items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-colors shadow-md hover:scale-105 active:scale-95 px-8"
    >
      <div className="flex gap-2 items-center">
        <span className="font-medium">{pending ? "Sending..." : "Send Message"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </button>
  )
}

export function ContactForm() {
  const initialState: ContactFormState = {}
  const [state, formAction] = useFormState(submitContactForm, initialState)

  return (
    <div>
      {state.success ? (
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Message Sent!</h3>
          <p className="text-gray-600">
            Thank you for your message. We'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form action={formAction} className="space-y-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            className="w-full h-14 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="w-full h-14 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500"
          />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
            className="w-full h-14 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 resize-none"
          />
          <div className="pt-2">
            <SubmitButton />
          </div>
        </form>
      )}
    </div>
  )
}
