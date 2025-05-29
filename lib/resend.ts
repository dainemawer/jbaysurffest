import { Resend } from 'resend'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
  throw new Error('Missing Resend configuration')
}

const resend = new Resend(RESEND_API_KEY)

export async function subscribeToNewsletter(email: string, name: string) {
  try {
    const [firstName, ...lastNameParts] = name.split(' ')
    const lastName = lastNameParts.join(' ')

    const response = await resend.contacts.create({
      email,
      firstName,
      lastName,
      unsubscribed: false,
      audienceId: RESEND_AUDIENCE_ID || '',
    })

    console.log(response);
    return response
  } catch (error) {
    console.error('Resend subscription error:', error)
    throw error
  }
}
