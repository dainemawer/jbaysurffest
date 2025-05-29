import { NextResponse } from "next/server"
import { subscribeToMailchimp } from "@/lib/mailchimp"

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      )
    }

    // Subscribe to Mailchimp
    await subscribeToMailchimp(email, name)

    return NextResponse.json(
      { message: "Subscription successful" },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Newsletter subscription error:", error)

    // Handle specific Mailchimp errors
    if (error.message.includes("already exists")) {
      return NextResponse.json(
        { message: "You're already subscribed!" },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { message: "Subscription failed. Please try again." },
      { status: 500 }
    )
  }
}
