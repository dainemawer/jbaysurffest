import crypto from 'crypto'

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX

if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER_PREFIX) {
  throw new Error('Missing Mailchimp configuration')
}

const MAILCHIMP_DC = MAILCHIMP_SERVER_PREFIX
const MAILCHIMP_API_URL = `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0`

export async function subscribeToMailchimp(email: string, name: string) {
  const subscriberHash = crypto
    .createHash('md5')
    .update(email.toLowerCase())
    .digest('hex')

  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: name.split(' ')[0],
      LNAME: name.split(' ').slice(1).join(' '),
    },
  }

  try {
    const response = await fetch(
      `${MAILCHIMP_API_URL}/lists/${MAILCHIMP_LIST_ID}/members/${subscriberHash}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.detail || 'Failed to subscribe to newsletter')
    }

    return await response.json()
  } catch (error) {
    console.error('Mailchimp subscription error:', error)
    throw error
  }
}
