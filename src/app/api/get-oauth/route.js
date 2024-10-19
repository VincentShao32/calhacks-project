import { auth, clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'


export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {
    //console.log("run")

    const { userId } = auth()

    if (!userId) {
      return NextResponse.json({ message: 'User not found' })
    }
  
    // Get the OAuth access token for the user
    const provider = 'oauth_google'
  
    const clerkResponse = await clerkClient().users.getUserOauthAccessToken(userId, provider)
    //console.log(clerkResponse)
    const accessToken = clerkResponse.data[0].token || ''
  
    if (!accessToken) {
      return NextResponse.json({ message: 'Access token not found' }, { status: 401 })
    }
    //console.log(accessToken)
    return NextResponse.json(accessToken, {status: 200})
}