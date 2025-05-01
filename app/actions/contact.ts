"use server"

import { z } from "zod"

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
    // Here you would typically:
    // 1. Store the contact form data in a database
    // 2. Send an email notification
    // 3. Log the submission

    // Example of sending an email (commented out as we don't have actual email service)
    /*
    await sendEmail({
      to: "festival@example.com",
      subject: `New contact form submission from ${rawFormData.name}`,
      text: `
        Name: ${rawFormData.name}
        Email: ${rawFormData.email}
        Message: ${rawFormData.message}
      `,
    });
    */

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
