"use server"

import { z } from "zod"
import { Resend } from "resend"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Define validation schema using Zod
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"), // Should be empty for real users
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export type ContactFormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
    honeypot?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Artificial delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Extract form data
  const rawFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    honeypot: formData.get("honeypot") as string,
  }

  // Validate form data
  const validationResult = ContactFormSchema.safeParse(rawFormData)

  // If validation fails, return errors
  if (!validationResult.success) {
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors: validationResult.error.flatten().fieldErrors,
    }
  }

  // If honeypot field is filled, it's likely a bot
  if (rawFormData.honeypot) {
    // Silently accept the submission but don't process it
    // This prevents bots from knowing they've been detected
    return {
      success: true,
      message: "Thank you for your message. We'll get back to you soon.",
    }
  }

  try {
    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const { data, error } = await resend.emails.send({
          from: "JBay Surf Festival <contact@jbaysurffest.co.za>",
          to: ["vangie@jbaysurffest.co.za"], // Replace with your actual email
          subject: `New Contact Form Submission from ${rawFormData.name}`,
          reply_to: rawFormData.email,
          text: `
Name: ${rawFormData.name}
Email: ${rawFormData.email}
Message: ${rawFormData.message}
          `,
          html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h1 style="color: #3b82f6; font-size: 24px;">New Contact Form Submission</h1>
  <p><strong>Name:</strong> ${rawFormData.name}</p>
  <p><strong>Email:</strong> ${rawFormData.email}</p>
  <p><strong>Message:</strong></p>
  <p style="background-color: #f9fafb; padding: 12px; border-radius: 4px;">${rawFormData.message}</p>
</div>
          `,
        })

        if (error) {
          console.error("Error sending email with Resend:", error)
          // Continue execution - we'll still consider the form submission successful
          // even if email sending fails
        }
      } catch (emailError) {
        console.error("Exception when sending email:", emailError)
        // Continue execution
      }
    } else {
      console.log("RESEND_API_KEY not configured. Email not sent.")
    }

    // Log the submission (for demonstration)
    console.log("Contact form submission:", {
      name: rawFormData.name,
      email: rawFormData.email,
      message: rawFormData.message,
      timestamp: new Date().toISOString(),
    })

    return {
      success: true,
      message: "Thank you for your message. We'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error processing contact form:", error)
    return {
      success: false,
      message: "There was an error submitting your message. Please try again later.",
    }
  }
}
