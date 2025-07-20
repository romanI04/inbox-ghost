import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AuthCodeError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Authentication Error</h2>
          <p className="mt-2 text-sm text-gray-600">Sorry, we couldn't sign you in. Please try again.</p>
        </div>
        <Button asChild>
          <Link href="/login">Try Again</Link>
        </Button>
      </div>
    </div>
  )
}
