"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"

export function LoginButton() {
  const handleGoogleLogin = async () => {
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      console.error("Error logging in:", error.message)
    }
  }

  return (
    <Button onClick={handleGoogleLogin} className="w-full">
      Continue with Google
    </Button>
  )
}
